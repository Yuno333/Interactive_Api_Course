import { useState } from 'react'
import { Check, Copy } from 'lucide-react'
import { Callout } from '../ui/index.jsx'

// ── Code Block ───────────────────────────────────────────────────
function CodeBlock({ code, lang = 'javascript', label }) {
  const [copied, setCopied] = useState(false)

  const copy = () => {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  return (
    <div className="rounded-xl border border-white/[0.07] overflow-hidden my-3">
      <div className="flex items-center justify-between px-4 py-2 bg-[#161b22] border-b border-white/[0.05]">
        <div className="flex items-center gap-3">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
          </div>
          {label && <span className="text-[11px] text-[#7d8590] font-mono font-semibold">{label}</span>}
        </div>
        <button onClick={copy}
          className={`flex items-center gap-1.5 text-[11px] px-2.5 py-1 rounded border transition-all
            ${copied ? 'text-brand_green border-brand_green/40' : 'text-[#7878a0] border-white/10 hover:text-white hover:border-white/20'}`}>
          {copied ? <><Check size={10} /> Copied!</> : <><Copy size={10} /> Copy</>}
        </button>
      </div>
      <pre className="bg-[#0d1117] px-5 py-5 overflow-x-auto font-mono text-[13px] leading-[1.75] text-[#e6edf3]">
        <code dangerouslySetInnerHTML={{ __html: highlight(code, lang) }} />
      </pre>
    </div>
  )
}

// ── Lightweight syntax highlighter ───────────────────────────────
function highlight(code, lang) {
  if (lang === 'text' || lang === 'bash') {
    return escHtml(code)
      .replace(/(#[^\n]*)/g, '<span style="color:#6e7681;font-style:italic">$1</span>')
  }
  return escHtml(code)
    .replace(/\b(const|let|var|function|return|async|await|try|catch|throw|new|if|else|for|of|in|class|export|import|from|default|true|false|null|undefined|require)\b/g,
      '<span style="color:#ff7b72">$1</span>')
    .replace(/(&quot;[^&]*&quot;|&#39;[^&]*&#39;|`[^`]*`)/g,
      '<span style="color:#a5d6ff">$1</span>')
    .replace(/\b(\d+)\b/g, '<span style="color:#79c0ff">$1</span>')
    .replace(/(\/\/[^\n]*)/g, '<span style="color:#6e7681;font-style:italic">$1</span>')
    .replace(/\b(console|app|req|res|next|prisma|jwt|bcrypt|process|Math|JSON|Date|Array|Object|Promise)\b/g,
      '<span style="color:#ffa657">$1</span>')
}

function escHtml(s) {
  return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;')
}

// ── Info Cards ───────────────────────────────────────────────────
function InfoCards({ items, title }) {
  return (
    <div className="my-4">
      {title && <SectionTitle>{title}</SectionTitle>}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {items.map((item, i) => (
          <div key={i} className="bg-[#161628] border border-white/[0.07] rounded-xl p-4 hover:border-white/[0.13] transition-colors">
            {item.icon && <div className="text-xl mb-2">{item.icon}</div>}
            <div className="text-sm font-semibold text-white mb-1.5">{item.title}</div>
            <div className="text-xs text-[#7878a0] leading-relaxed">{item.text}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

// ── Status List ──────────────────────────────────────────────────
const CODE_COLORS = {
  green:  'text-brand_green',
  blue:   'text-brand_blue',
  yellow: 'text-brand_yellow',
  red:    'text-accent',
  purple: 'text-brand_purple',
}

function StatusList({ items, title }) {
  return (
    <div className="my-4">
      {title && <SectionTitle>{title}</SectionTitle>}
      <div className="flex flex-col gap-2">
        {items.map((item, i) => (
          <div key={i} className="flex items-start gap-4 px-4 py-3 bg-[#161628] border border-white/[0.07] rounded-lg hover:border-white/[0.11] transition-colors">
            <span className={`font-mono text-[13px] font-bold min-w-[64px] pt-px ${CODE_COLORS[item.codeColor] || 'text-brand_green'}`}>
              {item.code}
            </span>
            <span className="text-[13px] font-semibold text-white min-w-[120px]">{item.name}</span>
            <span className="text-[12.5px] text-[#7878a0] leading-relaxed">{item.desc}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

// ── Endpoint List ────────────────────────────────────────────────
const METHOD_COLORS = {
  GET:    'bg-brand_green/15 text-brand_green',
  POST:   'bg-brand_blue/15 text-brand_blue',
  PUT:    'bg-brand_yellow/15 text-brand_yellow',
  PATCH:  'bg-brand_purple/15 text-brand_purple',
  DELETE: 'bg-accent/15 text-accent',
  HEAD:   'bg-white/10 text-[#7878a0]',
}

function EndpointList({ items, title }) {
  return (
    <div className="my-4">
      {title && <SectionTitle>{title}</SectionTitle>}
      <div className="flex flex-col gap-2">
        {items.map((item, i) => (
          <div key={i} className="flex items-center gap-3 px-4 py-2.5 bg-[#161628] border border-white/[0.07] rounded-lg hover:border-white/[0.13] transition-colors group">
            <span className={`font-mono text-[11px] font-bold px-2 py-0.5 rounded ${METHOD_COLORS[item.method] || 'bg-white/10 text-white'}`}>
              {item.method}
            </span>
            <span className="font-mono text-[12.5px] text-white flex-1">{item.path}</span>
            <span className="text-xs text-[#7878a0] group-hover:text-[#9898b8] transition-colors">{item.desc}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

// ── Flow Diagram ─────────────────────────────────────────────────
const FLOW_STYLES = {
  default: 'bg-[#161628] border-white/[0.07] text-[#eaeaf5]',
  hl:      'bg-accent/10 border-accent/30 text-accent',
  green:   'bg-brand_green/10 border-brand_green/30 text-brand_green',
  blue:    'bg-brand_blue/10 border-brand_blue/30 text-brand_blue',
}

function FlowDiagram({ steps, title }) {
  return (
    <div className="my-4">
      {title && <SectionTitle>{title}</SectionTitle>}
      <div className="flex flex-col gap-0">
        {steps.map((step, i) => (
          <div key={i}>
            <div className={`px-4 py-3 border rounded-lg text-[13px] font-medium ${FLOW_STYLES[step.color || 'default']}`}>
              <span className="text-[#7878a0] font-mono text-xs mr-2">{String(i + 1).padStart(2, '0')}</span>
              {step.label}
            </div>
            {i < steps.length - 1 && (
              <div className="text-center text-[#3a3a60] py-0.5 text-lg leading-none">↓</div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

// ── Table ────────────────────────────────────────────────────────
function DataTable({ headers, rows, title }) {
  return (
    <div className="my-4">
      {title && <SectionTitle>{title}</SectionTitle>}
      <div className="border border-white/[0.07] rounded-xl overflow-hidden">
        <table className="w-full text-[13px]">
          <thead>
            <tr>
              {headers.map((h, i) => (
                <th key={i} className="text-left px-4 py-2.5 bg-[#1e1e38] text-[#7878a0] font-semibold text-[11px] uppercase tracking-wider border-b border-white/[0.07]">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr key={i} className="hover:bg-[#161628] transition-colors border-t border-white/[0.04] first:border-t-0">
                {row.map((cell, j) => (
                  <td key={j} className="px-4 py-3 text-[#eaeaf5]">{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

// ── Token Parts ──────────────────────────────────────────────────
const TOKEN_STYLES = {
  'tp-h': 'bg-accent/10 border-accent/25 text-accent',
  'tp-p': 'bg-brand_blue/10 border-brand_blue/25 text-brand_blue',
  'tp-s': 'bg-brand_green/10 border-brand_green/25 text-brand_green',
}

function TokenDisplay({ parts }) {
  return (
    <div className="flex flex-wrap gap-1.5 my-4 items-center">
      {parts.map((p, i) => (
        <>
          <div key={i} className={`flex-1 min-w-[120px] px-3 py-2.5 border rounded-lg font-mono text-[11px] font-semibold text-center ${TOKEN_STYLES[p.colorClass]}`}>
            <div className="truncate">{p.text}</div>
            <div className="text-[10px] font-normal opacity-60 mt-1">{p.label}</div>
            {p.sublabel && <div className="text-[9px] opacity-50">{p.sublabel}</div>}
          </div>
          {i < parts.length - 1 && <span key={`dot-${i}`} className="text-[#3a3a60] text-xl font-black self-center">·</span>}
        </>
      ))}
    </div>
  )
}

// ── Pills ────────────────────────────────────────────────────────
const PILL_STYLES = {
  green:  'bg-brand_green/10 border-brand_green/25 text-brand_green',
  red:    'bg-accent/10 border-accent/25 text-accent',
  blue:   'bg-brand_blue/10 border-brand_blue/25 text-brand_blue',
  yellow: 'bg-brand_yellow/10 border-brand_yellow/25 text-brand_yellow',
  default:'bg-[#1e1e38] border-white/[0.07] text-[#eaeaf5]',
}

function Pills({ items, title }) {
  return (
    <div className="my-4">
      {title && <SectionTitle>{title}</SectionTitle>}
      <div className="flex flex-wrap gap-2">
        {items.map((item, i) => (
          <span key={i} className={`px-3 py-1.5 rounded-full text-xs font-medium border ${PILL_STYLES[item.color] || PILL_STYLES.default}`}>
            {item.label}
          </span>
        ))}
      </div>
    </div>
  )
}

// ── Section Title ────────────────────────────────────────────────
function SectionTitle({ children }) {
  return (
    <div className="text-[10px] font-bold tracking-[1.8px] uppercase text-[#7878a0] mb-3 pb-2 border-b border-white/[0.07]">
      {children}
    </div>
  )
}

// ── Main Renderer ────────────────────────────────────────────────
export default function LessonContent({ blocks }) {
  return (
    <div className="space-y-1">
      {blocks.map((block, i) => {
        switch (block.type) {
          case 'cards':
            return <InfoCards key={i} title={block.title} items={block.items} />
          case 'status-list':
            return <StatusList key={i} title={block.title} items={block.items} />
          case 'ep-list':
            return <EndpointList key={i} title={block.title} items={block.items} />
          case 'flow':
            return <FlowDiagram key={i} title={block.title} steps={block.steps} />
          case 'code':
            return <CodeBlock key={i} code={block.code} lang={block.lang} label={block.label} />
          case 'callout':
            return <Callout key={i} variant={block.variant}><span dangerouslySetInnerHTML={{ __html: block.text }} /></Callout>
          case 'table':
            return <DataTable key={i} title={block.title} headers={block.headers} rows={block.rows} />
          case 'token':
            return <TokenDisplay key={i} parts={block.parts} />
          case 'pills':
            return <Pills key={i} title={block.title} items={block.items} />
          default:
            return null
        }
      })}
    </div>
  )
}
