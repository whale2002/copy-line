# Copy Line for VS Code

一个实用的 VS Code 插件，帮助开发者快速复制文件名和行号，特别适合与 AI 助手协作时定位代码。

![demo](https://img.shields.io/badge/VS%20Code-latest-blue.svg)
![demo](https://img.shields.io/badge/license-MIT-green.svg)
![demo](https://img.shields.io/badge/version-0.0.1-orange.svg)

## ✨ 功能特点

- ⚡ **一键复制** - 选中代码后快速复制文件名和行号
- 🎯 **多种格式** - 支持 4 种输出格式，适合不同场景
- 🔧 **高度可配置** - 支持自定义快捷键和输出格式
- 🤝 **AI 友好** - 专为与 AI 协作定位代码而设计
- 📋 **右键菜单** - 支持右键菜单和编辑器标题栏按钮

## 🚀 安装方法

### 方法一：从 VS Code 市场安装（推荐）
1. 打开 VS Code
2. 按 `Cmd+Shift+P`（Mac）或 `Ctrl+Shift+P`（Windows/Linux）
3. 输入 "Extensions: Install Extensions"
4. 搜索 "Copy Line"
5. 点击安装

### 方法二：VSIX 包安装
1. 下载 `.vsix` 文件
2. 在 VS Code 中按 `Cmd+Shift+P`
3. 输入 "Extensions: Install from VSIX"
4. 选择下载的文件

## 📖 使用方法

### 快捷键
- **Mac**: `Cmd + Option + L`
- **Windows/Linux**: `Ctrl + Alt + L`

### 基本操作
1. 在编辑器中**选中**代码（支持多行选择和多重选择）
2. 按快捷键或从**右键菜单**选择"复制选中文件与行号"
3. 文件名和行号已复制到剪贴板，可直接粘贴给 AI

### 输出格式示例

#### 1. 带标签格式（默认）
```
File: src/extension.ts (line 24-30)
```

#### 2. 简洁格式
```
src/extension.ts:24-30
```

#### 3. 编程风格格式
```
src/extension.ts:24:30
```

#### 4. 自然语言格式
```
在 src/extension.ts 的第 24-30 行
```

## ⚙️ 配置选项

在 VS Code 设置中搜索 "Copy Line" 即可找到所有配置选项：

### outputFormat
输出格式类型，默认值：`labeled`
- `labeled`: `File: src/file.ts (line 24-30)`
- `compact`: `src/file.ts:24-30`
- `code-style`: `src/file.ts:24:30`
- `natural`: `在 src/file.ts 的第 24 行`

### useAbsolutePath
是否使用绝对路径，默认值：`false`
- `false`: 使用相对路径（相对于工作区根目录）
- `true`: 使用绝对路径

### showStatusMessage
复制后是否显示状态栏消息，默认值：`true`

### singleLineFormat
单行选择时的格式模板，默认值：`line ${line}`
- 可用变量：`${line}`, `${start}`, `${end}`

### multiLineFormat
多行选择时的格式模板，默认值：`line ${start}-${end}`
- 可用变量：`${line}`, `${start}`, `${end}`

## 🎯 适用场景

### 与 AI 协作
告诉 AI 你想讨论的代码位置：

**输入 AI：**
```
请帮我优化这段代码：
File: src/extension.ts (line 24-30)
```

**AI 理解：**
需要查看 `src/extension.ts` 文件的第 24 到 30 行代码

### 代码审查
快速定位需要审查的代码：

```
需要审查：
File: src/service/user.ts (line 45-67)
File: src/utils/helper.ts (line 12)
```

### Bug 报告
向团队报告问题代码：

```
发现 bug：
File: src/api/client.ts (line 88-95)
```

## 📝 自定义配置示例

```json
{
  "copy-line.outputFormat": "natural",
  "copy-line.useAbsolutePath": true,
  "copy-line.singleLineFormat": "第 ${line} 行",
  "copy-line.multiLineFormat": "第 ${start} 到 ${end} 行",
  "copy-line.showStatusMessage": false
}
```

## ⌨️ 快捷键设置

如果默认快捷键冲突，可在 VS Code 中自定义：

1. 打开 `File > Preferences > Keyboard Shortcuts`
2. 搜索 "复制选中文件与行号"
3. 点击编辑，设置为新的快捷键

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

### 开发设置
1. 克隆仓库
2. 运行 `npm install`
3. 按 `F5` 启动调试
4. 在新窗口中测试功能

## 📄 许可证

MIT License - 详见 [LICENSE](LICENSE) 文件

## ⭐ 支持

如果这个插件对你有帮助，请给它一个 ⭐！

---

**享受与 AI 协作的乐趣！** 🚀
