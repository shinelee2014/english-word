# 苏州小学英语单词通关系统（译林版）🎒

这是一个专为苏州市小学生（1-6年级）设计的英语单词多维记忆与通关测试系统。

## 🌐 在线访问
👉 **直接点击访问**：[https://shinelee2014.github.io/english-word/](https://shinelee2014.github.io/english-word/)

## 💻 Windows 桌面客户端下载
为了获得更好的独立防干扰学习体验、内置 12 本高清电子课本一键点读、且免去浏览器缓存被清理的烦恼，您可以下载我们的 **Windows 桌面客户端**：
* 🚀 **绿色免安装版 (Portable)**：[点击下载 悦读英语 1.0.0.exe](https://github.com/shinelee2014/english-word/releases/download/v1.0.0/%E6%82%A6%E8%AF%BB%E8%8B%B1%E8%AF%AD.1.0.0.exe) — 双击直接运行，省时省力，数据永久保存在本目录下。
* 🚚 **一键安装版 (Installer)**：[点击下载 悦读英语 Setup 1.0.0.exe](https://github.com/shinelee2014/english-word/releases/download/v1.0.0/%E6%82%A6%E8%AF%BB%E8%8B%B1%E8%AF%AD.Setup.1.0.0.exe) — 自动生成桌面和开始菜单图标。

*(提示：下载后，您可以在本项目的 [GitHub Releases 页面](https://github.com/shinelee2014/english-word/releases) 找到所有版本的下载安装包。)*


## 🌟 核心特性

- 🎨 **极简手绘风格**：专为孩子设计的护眼原木色调，配合铅笔描边动效，美观舒适，不易视觉疲劳。
- ⚙️ **多维渐进闯关**：识记自评 ➔ 听音辨意 ➔ 拼写挑战，由浅入深，符合记忆规律。
- 🔊 **完全离线发音**：调用设备内置的 Web Speech API 实现原声发音，支持英音/美音切换及语速调节，离线无忧。
- 👤 **多学习者管理**：支持多个小朋友独立保存生词本与单元通关进度，一键快速切换，无需设置密码。
- 📖 **单词大全与生词本**：方便孩子随时查询单词读音、音标与释义，并将难记词一键收藏。

## 🚀 局域网/威联通 NAS 部署与数据持久化

为了给家里的孩子保存通关进度与生词本，且不受设备浏览器缓存清除的影响，本项目支持 **Docker 容器化部署**：

### 🐳 方案：Docker 容器化部署 (推荐)
本方式最干净、安全，支持通过挂载本地目录的方式实现进度与教材数据的物理隔离。

#### 1. 使用 Docker Compose 一键启动（命令行模式）
1. 将本项目所有代码下载/同步到您的 NAS 某个目录下。
2. 确保教材已放入该目录下的 `译林版小学英语【电子课本】` 文件夹中。
3. 在该目录下直接运行以下命令启动服务：
   ```bash
   docker compose up -d --build
   ```
4. 服务启动后，局域网内的平板、手机通过浏览器直接访问 `http://[QNAP的局域网IP]:3000` 即可。

#### 2. 在威联通 Container Station (图形界面) 部署
1. 打开威联通 **Container Station (容器工作站)**，点击 **“应用程序 (Applications)”** -> **“创建 (Create)”**。
2. 在 YAML 编辑器中复制并修改以下内容：
   ```yaml
   version: '3.8'
   services:
     suz-english-word:
       image: node:20-alpine
       container_name: suz-english-word
       working_dir: /app
       command: node server.js
       ports:
         - "3000:3000"
       volumes:
         # 映射您的学习进度目录
         - /share/Container/english-word/data:/app/data
         # 映射您的电子课本文件夹路径
         - "/share/Container/english-word/译林版小学英语【电子课本】:/app/译林版小学英语【电子课本】"
       restart: always
   ```
   *(注：请将冒号左侧的 `/share/Container/...` 路径替换为您的 NAS 真实物理共享路径。)*

### 💾 进度保存与永久化机制
* **跨设备云同步**：应用内提供了 `💾 保存` 按钮。保存的数据会自动写入 NAS 的 `data/` 目录中生成 JSON 进度文件。
* **数据永久化**：即使清除 iPad 浏览器缓存，或者更换学习设备，只要在威联通局域网内访问并选择对应学习者，进度和生词本都会自动加载。

### 3. GitHub Pages 静态访问降级
* 由于 GitHub Pages 仅支持静态网页托管，不支持 Docker/PHP 等后端服务，因此通过 GitHub Pages 访问时，系统会自动安全降级使用浏览器的本地 localStorage。

---
*由 AI 助理 Antigravity 设计并搭建 ❤️*
