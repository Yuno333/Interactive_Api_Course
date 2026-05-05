import { Link, useLocation } from 'react-router-dom'
import { BookOpen, Code2, User, Menu, X } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const { pathname } = useLocation()
  const [open, setOpen] = useState(false)

  const links = [
    { to: '/',           label: 'Courses' },
    { to: '/instructor', label: 'Instructor' },
  ]

  return (
    <nav className="sticky top-0 z-50 glass border-b border-white/[0.07]">
      <div className="max-w-6xl mx-auto px-6 h-[60px] flex items-center gap-6">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 font-display font-extrabold text-[19px] text-white tracking-tight">
          <span className="w-7 h-7 rounded-lg bg-accent flex items-center justify-center">
            <Code2 size={14} strokeWidth={2.5} />
          </span>
          Dev<span className="text-accent">Path</span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-1 ml-4">
          {links.map(l => (
            <Link key={l.to} to={l.to}
              className={`px-3.5 py-1.5 rounded-lg text-sm font-medium transition-all duration-150
                ${pathname === l.to ? 'text-accent bg-accent/8' : 'text-[#7878a0] hover:text-white hover:bg-white/5'}`}>
              {l.label}
            </Link>
          ))}
        </div>

        {/* Right */}
        <div className="ml-auto flex items-center gap-3">
          <a href="https://x.com/yuno_x999" target="_blank" rel="noopener"
            className="hidden md:flex items-center gap-1.5 text-xs text-[#7878a0] hover:text-white transition-colors px-3 py-1.5 rounded-lg hover:bg-white/5">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
            @yuno_x999
          </a>
          <Link to="/instructor"
            className="hidden md:flex items-center gap-2 px-3.5 py-1.5 rounded-xl border border-white/10 hover:border-white/20 transition-all text-sm text-white hover:bg-white/5">
            <div className="w-5 h-5 rounded-full bg-gradient-to-br from-accent to-brand_blue flex items-center justify-center text-[9px] font-bold">R</div>
            Rasheed
          </Link>

          {/* Mobile menu toggle */}
          <button className="md:hidden text-[#7878a0] hover:text-white p-1.5" onClick={() => setOpen(!open)}>
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-white/[0.07] bg-[#0f0f1e] px-6 py-4 flex flex-col gap-2">
          {links.map(l => (
            <Link key={l.to} to={l.to} onClick={() => setOpen(false)}
              className={`px-3 py-2 rounded-lg text-sm font-medium ${pathname === l.to ? 'text-accent' : 'text-[#7878a0]'}`}>
              {l.label}
            </Link>
          ))}
          <a href="https://x.com/yuno_x999" target="_blank" rel="noopener" className="px-3 py-2 text-sm text-[#7878a0]">
            @yuno_x999 on X
          </a>
        </div>
      )}
    </nav>
  )
}
