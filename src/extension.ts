import * as vscode from 'vscode'
import * as path from 'path'

function toFilePath(doc: vscode.TextDocument, useAbsolutePath: boolean): string {
  const filePath = doc.uri.fsPath
  const folders = vscode.workspace.workspaceFolders || []

  if (useAbsolutePath) {
    return filePath
  }

  for (const f of folders) {
    const root = f.uri.fsPath
    if (filePath === root || filePath.startsWith(root + path.sep)) {
      const rel = path.relative(root, filePath)
      return rel.split(path.sep).join('/')
    }
  }
  return path.basename(filePath)
}

function formatLineRange(start: number, end: number, format: string): string {
  const lineInfo = format
    .replace('${start}', String(start))
    .replace('${end}', String(end))
    .replace('${line}', String(start))
  return lineInfo
}

function formatSelection(sel: vscode.Selection, useAbsolutePath: boolean, outputFormat: string): string {
  const editor = vscode.window.activeTextEditor
  if (!editor) return ''

  const doc = editor.document
  const filePath = toFilePath(doc, useAbsolutePath)
  const start = sel.start.line + 1
  const end = sel.end.line + 1

  const config = vscode.workspace.getConfiguration('copy-line')
  const singleLineFormat = config.get('singleLineFormat', 'line ${line}')
  const multiLineFormat = config.get('multiLineFormat', 'line ${start}-${end}')

  const lineRangeText = sel.isEmpty || start === end
    ? formatLineRange(start, start, singleLineFormat)
    : formatLineRange(start, end, multiLineFormat)

  switch (outputFormat) {
    case 'labeled':
      return `File: ${filePath} (${lineRangeText})`
    case 'compact':
      return `${filePath}:${start}${start !== end ? '-' + end : ''}`
    case 'code-style':
      return `${filePath}:${start}${start !== end ? ':' + end : ''}`
    case 'natural':
      const rangeText = start === end ? `第 ${start} 行` : `第 ${start}-${end} 行`
      return `在 ${filePath} 的${rangeText}`
    default:
      return `File: ${filePath} (${lineRangeText})`
  }
}

export function activate(context: vscode.ExtensionContext) {
  const disposable = vscode.commands.registerCommand('copy-line.copySelectionReference', async () => {
    const editor = vscode.window.activeTextEditor
    if (!editor) return

    const config = vscode.workspace.getConfiguration('copy-line')
    const outputFormat = config.get('outputFormat', 'labeled')
    const useAbsolutePath = config.get('useAbsolutePath', false)
    const showStatusMessage = config.get('showStatusMessage', true)

    const sels = editor.selections && editor.selections.length ? editor.selections : [editor.selection]
    const parts = sels.map(s => formatSelection(s, useAbsolutePath, outputFormat))
    const text = parts.join('\n')

    await vscode.env.clipboard.writeText(text)

    if (showStatusMessage) {
      vscode.window.setStatusBarMessage(`已复制: ${text}`, 2000)
    }
  })
  context.subscriptions.push(disposable)
}

export function deactivate() {}
