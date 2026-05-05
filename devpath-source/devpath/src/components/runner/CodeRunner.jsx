import { useState, useRef, useCallback } from 'react'
import Editor from '@monaco-editor/react'
import { Play, RotateCcw, Terminal, Loader2, ChevronDown, ChevronUp } from 'lucide-react'

const MONACO_OPTIONS = {
  minimap: { enabled: false },
  fontSize: 13,
  lineHeight: 22,
  fontFamily: "'JetBrains Mono', monospace",
  fontLigatures: true,
  scrollBeyondLastLine: false,
  renderLineHighlight: 'line',
  lineNumbers: 'on',
  glyphMargin: false,
  folding: true,
  padding: { top: 16, bottom: 16 },
  tabSize: 2,
  wordWrap: 'on',
  theme: 'devpath-dark',
}

// Safe sandbox execution — captures console.log output
function sandboxRun(code) {
  const logs = []
  const sandbox = {
    console: {
      log:   (...a) => logs.push(a.map(formatValue).join(' ')),
      error: (...a) => logs.push('❌ ' + a.map(formatValue).join(' ')),
      warn:  (...a) => logs.push('⚠️  ' + a.map(formatValue).join(' ')),
      info:  (...a) => logs.push('ℹ️  ' + a.map(formatValue).join(' ')),
    },
    JSON,
    Math,
    Date,
    Array,
    Object,
    String,
    Number,
    Boolean,
    parseInt,
    parseFloat,
    isNaN,
    isFinite,
    setTimeout: () => {},
    clearTimeout: () => {},
    btoa: typeof btoa !== 'undefined' ? btoa : (s) => Buffer.from(s).toString('base64'),
    atob: typeof atob !== 'undefined' ? atob : (s) => Buffer.from(s, 'base64').toString(),
  }

  try {
    const fn = new Function(...Object.keys(sandbox), code)
    fn(...Object.values(sandbox))
    return { output: logs.join('\n') || '(no output)', error: null }
  } catch (err) {
    return { output: null, error: err.message }
  }
}

function formatValue(v) {
  if (v === null) return 'null'
  if (v === undefined) return 'undefined'
  if (typeof v === 'string') return v
  if (typeof v === 'function') return '[Function]'
  try { return JSON.stringify(v, null, 2) } catch { return String(v) }
}

export default function CodeRunner({ title = 'Try it', starterCode = '' }) {
  const [code, setCode]           = useState(starterCode)
  const [output, setOutput]       = useState(null)
  const [error, setError]         = useState(null)
  const [running, setRunning]     = useState(false)
  const [outputOpen, setOutputOpen] = useState(true)
  const editorRef = useRef(null)

  const setupTheme = useCallback((monaco) => {
    monaco.editor.defineTheme('devpath-dark', {
      base: 'vs-dark',
      inherit: true,
      rules: [
        { token: 'comment',    foreground: '6e7681', fontStyle: 'italic' },
        { token: 'keyword',    foreground: 'ff7b72' },
        { token: 'string',     foreground: 'a5d6ff' },
        { token: 'number',     foreground: '79c0ff' },
        { token: 'identifier', foreground: 'e6edf3' },
        { token: 'type',       foreground: 'ffa657' },
        { token: 'function',   foreground: 'd2a8ff' },
      ],
      colors: {
        'editor.background':          '#0d1117',
        'editor.foreground':          '#e6edf3',
        'editorLineNumber.foreground':'#6e7681',
        'editorLineNumber.activeForeground': '#e6edf3',
        'editor.selectionBackground': '#264f78',
        'editor.lineHighlightBackground': '#161b22',
        'editorCursor.foreground':    '#00d4aa',
        'editor.selectionHighlightBackground': '#264f7855',
      },
    })
    monaco.editor.setTheme('devpath-dark')
  }, [])

  const run = useCallback(async () => {
    setRunning(true)
    setOutput(null)
    setError(null)
    setOutputOpen(true)
    await new Promise(r => setTimeout(r, 80))
    const result = sandboxRun(code)
    if (result.error) setError(result.error)
    else setOutput(result.output)
    setRunning(false)
  }, [code])

  const reset = useCallback(() => {
    setCode(starterCode)
    setOutput(null)
    setError(null)
  }, [starterCode])

  const hasResult = output !== null || error !== null

  return (
    <div className="rounded-xl border border-brand_green/20 overflow-hidden my-5 shadow-lg shadow-black/20">

      {/* Header */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-[#0a1a15] border-b border-brand_green/10">
        <div className="flex items-center gap-2 text-brand_green text-xs font-semibold">
          <Terminal size={13} />
          {title}
        </div>
        <div className="flex items-center gap-2">
          <button onClick={reset}
            className="flex items-center gap-1.5 px-2.5 py-1 text-[11px] text-[#7878a0] hover:text-white border border-white/10 hover:border-white/20 rounded-md transition-all">
            <RotateCcw size={10} /> Reset
          </button>
          <button onClick={run} disabled={running}
            className="flex items-center gap-1.5 px-3 py-1 bg-brand_green hover:brightness-110 disabled:opacity-50 disabled:cursor-not-allowed text-black text-[12px] font-bold rounded-md transition-all">
            {running ? <Loader2 size={11} className="animate-spin" /> : <Play size={11} className="fill-black" />}
            {running ? 'Running…' : 'Run Code'}
          </button>
        </div>
      </div>

      {/* Editor */}
      <div className="bg-[#0d1117]">
        <Editor
          height="280px"
          defaultLanguage="javascript"
          value={code}
          onChange={v => setCode(v || '')}
          onMount={(editor, monaco) => { editorRef.current = editor; setupTheme(monaco) }}
          beforeMount={setupTheme}
          options={MONACO_OPTIONS}
          loading={
            <div className="h-[280px] bg-[#0d1117] flex items-center justify-center">
              <Loader2 size={18} className="animate-spin text-brand_green" />
            </div>
          }
        />
      </div>

      {/* Output */}
      {hasResult && (
        <div className="border-t border-white/[0.06]">
          <button
            onClick={() => setOutputOpen(o => !o)}
            className="w-full flex items-center justify-between px-4 py-2 bg-[#080d10] hover:bg-[#0b1115] transition-colors text-xs font-semibold"
          >
            <span className={error ? 'text-red-400' : 'text-brand_green'}>
              {error ? '❌ Error' : '✅ Output'}
            </span>
            {outputOpen ? <ChevronUp size={13} className="text-[#7878a0]" /> : <ChevronDown size={13} className="text-[#7878a0]" />}
          </button>

          {outputOpen && (
            <div className="bg-[#060d08] px-4 py-4 max-h-64 overflow-y-auto">
              <pre className={`font-mono text-[12.5px] leading-relaxed whitespace-pre-wrap ${error ? 'text-red-400' : 'text-[#b3f0d8]'}`}>
                {error || output}
              </pre>
            </div>
          )}
        </div>
      )}

      {/* Hint when no output yet */}
      {!hasResult && (
        <div className="bg-[#060d08] px-4 py-3 text-[11px] text-[#3a3a60] border-t border-white/[0.04]">
          Press <kbd className="px-1.5 py-0.5 bg-[#161628] border border-white/10 rounded text-[10px] text-[#7878a0]">Run Code</kbd> to execute — output appears here
        </div>
      )}
    </div>
  )
}
