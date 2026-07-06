param(
    [string]$CommitMessage = "sync: auto-sync update"
)

# Set console encoding to UTF-8
[Console]::OutputEncoding = [System.Text.Encoding]::UTF8

$nasPath = "\\192.168.199.63\Web\english"
$localFiles = @("index.html", "words_data.js", "README.md", "project.md", "memory.md", "sync.ps1", "api.php")

Write-Host "====== Syncing to QNAP NAS ======" -ForegroundColor Cyan
if (Test-Path $nasPath) {
    foreach ($file in $localFiles) {
        if (Test-Path $file) {
            Copy-Item -Path $file -Destination $nasPath -Force
            Write-Host "Synced: $file -> $nasPath" -ForegroundColor Green
        }
    }
} else {
    Write-Warning "Cannot access QNAP NAS: $nasPath"
}

Write-Host "`n====== Syncing to GitHub ======" -ForegroundColor Cyan
git add index.html words_data.js README.md project.md memory.md sync.ps1 api.php
$status = git status --porcelain
if ($status) {
    git commit -m $CommitMessage
    git push origin main
    Write-Host "GitHub Push Complete!" -ForegroundColor Green
} else {
    Write-Host "No changes detected, skipping GitHub push." -ForegroundColor Yellow
}
