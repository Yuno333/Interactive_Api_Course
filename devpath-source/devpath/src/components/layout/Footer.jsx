import { Link } from 'react-router-dom'
import { Code2, Heart } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.07] mt-auto">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">

        <div className="flex items-center gap-2 font-display font-extrabold text-[17px] text-white">
          <span className="w-6 h-6 rounded-md bg-accent flex items-center justify-center">
            <Code2 size={12} strokeWidth={2.5} />
          </span>
          Dev<span className="text-accent">Path</span>
        </div>

        <div className="flex items-center gap-6">
          <Link to="/" className="text-sm text-[#7878a0] hover:text-white transition-colors">Courses</Link>
          <Link to="/instructor" className="text-sm text-[#7878a0] hover:text-white transition-colors">Instructor</Link>
          <a href="mailto:rasheedsanni3@gmail.com" className="text-sm text-[#7878a0] hover:text-white transition-colors">Contact</a>
          <a href="https://x.com/yuno_x999" target="_blank" rel="noopener" className="text-sm text-[#7878a0] hover:text-white transition-colors">X / Twitter</a>
        </div>

        <p className="text-xs text-[#3a3a60] flex items-center gap-1.5">
          Built with <Heart size={11} className="text-accent fill-accent" /> by Rasheed Sanni &mdash; Pioneering tech in Africa
        </p>
      </div>
    </footer>
  )
}
