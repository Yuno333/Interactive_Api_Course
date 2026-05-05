// ── Button ───────────────────────────────────────────────────────
export function Button({ children, variant = 'primary', size = 'md', className = '', disabled, onClick, href, ...props }) {
  const base = 'inline-flex items-center gap-2 font-semibold rounded-lg transition-all duration-150 cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed'
  const variants = {
    primary: 'bg-accent hover:bg-accent-dark text-white border border-accent',
    outline: 'bg-transparent text-white border border-white/10 hover:border-white/20 hover:bg-white/5',
    ghost:   'bg-transparent text-[#7878a0] border border-transparent hover:bg-[#161628] hover:text-white',
    danger:  'bg-accent/10 text-accent border border-accent/30 hover:bg-accent/20',
    green:   'bg-brand_green text-black border border-brand_green hover:brightness-110',
  }
  const sizes = { sm: 'px-3.5 py-1.5 text-xs', md: 'px-5 py-2.5 text-sm', lg: 'px-7 py-3.5 text-base' }
  const cls = `${base} ${variants[variant]} ${sizes[size]} ${className}`
  if (href) return <a href={href} className={cls} {...props}>{children}</a>
  return <button className={cls} disabled={disabled} onClick={onClick} {...props}>{children}</button>
}

// ── Badge ────────────────────────────────────────────────────────
export function Badge({ children, color = 'accent', className = '' }) {
  const colors = {
    accent: 'bg-accent/10 text-accent border-accent/25',
    blue:   'bg-brand_blue/10 text-brand_blue border-brand_blue/25',
    green:  'bg-brand_green/10 text-brand_green border-brand_green/25',
    yellow: 'bg-brand_yellow/10 text-brand_yellow border-brand_yellow/25',
    purple: 'bg-brand_purple/10 text-brand_purple border-brand_purple/25',
    red:    'bg-accent/10 text-accent border-accent/25',
  }
  return (
    <span className={`inline-flex items-center gap-1 text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full border ${colors[color] || colors.accent} ${className}`}>
      {children}
    </span>
  )
}

// ── Card ─────────────────────────────────────────────────────────
export function Card({ children, className = '', onClick, hover = true }) {
  return (
    <div onClick={onClick}
      className={`bg-[#0f0f1e] border border-white/[0.07] rounded-2xl transition-all duration-200
        ${hover ? 'hover:border-white/[0.13] hover:-translate-y-0.5' : ''}
        ${onClick ? 'cursor-pointer' : ''} ${className}`}>
      {children}
    </div>
  )
}

// ── Callout ──────────────────────────────────────────────────────
export function Callout({ variant = 'info', children }) {
  const styles = {
    info:   'bg-sky-500/5   border-sky-400/40',
    tip:    'bg-emerald-500/5 border-emerald-400/40',
    warn:   'bg-yellow-500/5 border-yellow-400/40',
    danger: 'bg-red-500/5   border-red-400/40',
  }
  return (
    <div className={`px-4 py-3.5 rounded-lg border-l-[3px] text-sm leading-relaxed my-3 text-[#eaeaf5] ${styles[variant]}`}>
      {children}
    </div>
  )
}

// ── Progress Ring ────────────────────────────────────────────────
export function ProgressRing({ percent, size = 56, stroke = 4, color = '#e94560' }) {
  const r = (size - stroke) / 2
  const circ = 2 * Math.PI * r
  const offset = circ - (percent / 100) * circ
  return (
    <svg width={size} height={size} className="-rotate-90">
      <circle cx={size/2} cy={size/2} r={r} fill="none" stroke="rgba(255,255,255,0.07)" strokeWidth={stroke} />
      <circle cx={size/2} cy={size/2} r={r} fill="none" stroke={color} strokeWidth={stroke}
        strokeDasharray={circ} strokeDashoffset={offset} strokeLinecap="round"
        style={{ transition: 'stroke-dashoffset 0.5s ease' }} />
    </svg>
  )
}
