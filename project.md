# 项目说明书 (project.md)

> [!NOTE]
> 本文件定义了当前项目的核心背景、目标、设计规范与任务看板。助理每次开启新会话时会优先加载此文件，以获取最新的项目上下文。

---

## 🎯 1. 项目背景与目标

*   **项目愿景**：针对苏州市小学生（江苏译林版英语教材），提供一个极简、护眼（原木/手绘风）、完全本地运行（支持威联通 NAS 和 GitHub Pages）的多维渐进式单词通关与课文双语点读系统。帮助孩子快乐、自主地背单词和读课文。
*   **当前核心任务**：
    1. 持续维护单词库（目前已内置 6A 完整词库及课文）。
    2. 确保在 iPad 等移动设备上的最佳触控和朗读体验。
    3. 支持多位学习者进度保存（LocalStorage）与自动多端同步（NAS & GitHub）。

## 🛠️ 2. 技术栈与核心依赖

*   **运行环境**：静态 Web 浏览器环境，100% 客户端运行。
*   **核心库/框架**：Vanilla HTML5 + Tailwind CSS (通过 CDN 加载样式) + Vanilla JavaScript。
*   **第三方外部服务/API**：无（零外部依赖，使用浏览器原生 Web Speech API 实现语音朗读）。

## 🏗️ 3. 架构设计与模块分工

*   **目录结构**：
    *   [index.html](file:///d:/antigravity/app/English%20word/index.html)：主应用入口，包含所有 UI 界面、路由切换、游戏关卡逻辑和触控适配样式。
    *   [words_data.js](file:///d:/antigravity/app/English%20word/words_data.js)：核心单词数据库，包含 Grade 1-6 词库大纲，以及 6A（六年级上册）的完整单元单词和 Story time 课文。
    *   [sync.ps1](file:///d:/antigravity/app/English%20word/sync.ps1)：自动化维护工具，一键同步本地代码到威联通 NAS 和 GitHub 仓库。

## 📋 4. 交付合格标准 (Definition of Done)

*   **开发验收标准**：
    *   [x] 代码无语法错误，无未定义变量引用。
    *   [x] 完美适配 iPad/平板端触控，按键无 300ms 延迟，无误双击缩放。
    *   [x] 离线状态下语音朗读（英音/美音）功能正常。
*   **Reality Checker 专项清单**：
    *   [x] LocalStorage 存储必须按学习者名字隔离，无密码直接切换，不产生跨人进度污染。
    *   [x] 课文朗读在连读模式下必须跟随滚动并自动高亮。

## 📅 5. 开发任务与看板 (TODO List)

- `[x]` 多维关卡流程开发 (识记、听音、拼写)
- `[x]` 多学习者进度与生词本隔离存储
- `[x]` iPad 平板端触控性能与防缩放优化
- `[x]` 课文点读机模块（中英显示、单句点读、整篇连读与滚动高亮）
- `[x]` QNAP NAS 与 GitHub Pages 双通道同步脚本编写
