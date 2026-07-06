param(
    [string]$CommitMessage = "sync: auto-sync update"
)

# 确保控制台支持 UTF-8 输出
$OutputEncoding = [System.Text.Encoding]::UTF8

$nasPath = "\\192.168.199.63\Web\english"
$localFiles = @("index.html", "words_data.js", "README.md")

Write-Host "====== 正在同步至 威联通 NAS ======" -ForegroundColor Cyan
if (Test-Path $nasPath) {
    foreach ($file in $localFiles) {
        if (Test-Path $file) {
            Copy-Item -Path $file -Destination $nasPath -Force
            Write-Host "已同步: $file -> $nasPath" -ForegroundColor Green
        }
    }
} else {
    Write-Warning "无法访问威联通 NAS 路径: $nasPath"
}

Write-Host "`n====== 正在同步至 GitHub 仓库 ======" -ForegroundColor Cyan
git add index.html words_data.js README.md
# 检查是否有文件更改需要提交
$status = git status --porcelain
if ($status) {
    git commit -m $CommitMessage
    git push origin main
    Write-Host "GitHub 推送完成！" -ForegroundColor Green
} else {
    Write-Host "没有检测到任何文件改动，无需提交 GitHub。" -ForegroundColor Yellow
}
