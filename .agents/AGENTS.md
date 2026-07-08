# Project-Scoped Rules (AGENTS.md)

## 🔄 同步部署与版本更新规范

每当在当前工作区修改、优化或新增了代码（如 `index.html`、`server.js`、`words_data.js`、`Dockerfile`、`docker-compose.yml` 或 `main.js` 等）：

1.  **本地电脑 (Local PC)**：确保修改在本地工作目录中完整保存、测试运行无误，并根据需要重新打包编译桌面程序（`npm run build`）。
2.  **GitHub 仓库 (GitHub Repo)**：通过 Git 将修改暂存并提交，推送到 `desktop-dev` 分支（并在重大更新时通过 `gh release` 自动化发布新版本标签及附件）。
3.  **威联通 NAS (QNAP NAS)**：
    *   通过 SSH/SFTP 连接到威联通 NAS (`192.168.199.63`)，用户名为 `admin`，密码为 `19821026lxn`。
    *   将最新的核心代码文件（`index.html`、`server.js`、`words_data.js`、`package.json`、`package-lock.json`、`Dockerfile`、`docker-compose.yml`）同步上传覆盖到 NAS 部署目录 `/share/CACHEDEV1_DATA/Container/english-word/`。
    *   若是代码或 Docker 依赖发生改变，在本地打包导出最新镜像（`docker save`），上传并使用 `docker load` 载入 NAS，然后重启容器以保证威联通端的网页/Docker 版本与本地电脑、GitHub 实时同步。
