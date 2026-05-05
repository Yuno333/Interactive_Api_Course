import { Link } from 'react-router-dom'
import { ArrowRight, BookOpen, Globe, Mail } from 'lucide-react'
import { CATALOG } from '../data/courses.js'
import Navbar from '../components/layout/Navbar.jsx'
import Footer from '../components/layout/Footer.jsx'

const UPCOMING = [
  { icon: '💻', title: 'Backend Development',   sub: 'Node.js to Production',    color: '#4fc3f7' },
  { icon: '💰', title: 'Fintech & Blockchain',  sub: 'Web3 from First Principles',color: '#ffd060' },
  { icon: '⚙️', title: 'DevOps',                sub: 'CI/CD & Infrastructure',   color: '#00d4aa' },
  { icon: '🤖', title: 'AI & Machine Learning', sub: 'Applied AI for Developers', color: '#b464ff' },
]

export default function Instructor() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1">

        {/* ── Hero ─────────────────────────────────────────────── */}
        <section className="relative pt-20 pb-16 px-6 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-1/4 w-[500px] h-[300px] rounded-full opacity-10"
              style={{ background: 'radial-gradient(ellipse, #e94560 0%, transparent 70%)' }} />
          </div>

          <div className="relative max-w-3xl mx-auto text-center">
            <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-accent to-brand_blue mx-auto mb-6 flex items-center justify-center text-4xl font-display font-extrabold text-white shadow-2xl shadow-accent/30">
              R
            </div>
            <div className="text-[10px] font-bold tracking-[2px] uppercase text-accent mb-3">Instructor</div>
            <h1 className="font-display text-4xl font-extrabold text-white mb-3">Rasheed Sanni</h1>
            <p className="text-[15px] text-[#7878a0] mb-2">Computer Science Student &amp; Technology Educator</p>
            <p className="text-sm text-accent font-semibold mb-6">🌍 Pioneering Technology in Africa Through Education</p>

            <div className="flex items-center justify-center gap-3 flex-wrap">
              <a href="https://x.com/yuno_x999" target="_blank" rel="noopener"
                className="flex items-center gap-2 px-5 py-2.5 bg-white/5 border border-white/10 hover:border-white/20 rounded-xl text-sm text-white font-semibold transition-all hover:bg-white/8">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                Follow on X
              </a>
              <a href="mailto:rasheedsanni3@gmail.com"
                className="flex items-center gap-2 px-5 py-2.5 bg-accent/10 border border-accent/30 hover:bg-accent/18 rounded-xl text-sm text-accent font-semibold transition-all">
                <Mail size={14} /> rasheedsanni3@gmail.com
              </a>
            </div>
          </div>
        </section>

        {/* ── About ─────────────────────────────────────────────── */}
        <section className="py-16 px-6 border-t border-white/[0.07]">
          <div className="max-w-3xl mx-auto">
            <div className="text-[10px] font-bold tracking-[2px] uppercase text-[#7878a0] mb-4">About</div>
            <div className="space-y-4 text-[15px] text-[#7878a0] leading-[1.85]">
              <p>
                Hey — I'm Rasheed, a computer science student dedicated to making technology education genuinely accessible across Africa.
                My mission is simple: take complex engineering topics and break them down so clearly that anyone, regardless of background, can build real things.
              </p>
              <p>
                I believe the next wave of world-changing products will be built by developers from Africa — and the biggest blocker is not talent, it's access to quality, contextual education.
                That's what DevPath is about.
              </p>
              <p>
                I teach by doing. Every course on this platform is built around real code, real projects, and real problems — not slides with bullet points.
                When you finish a course here, you should be able to open a terminal and build something.
              </p>
            </div>
          </div>
        </section>

        {/* ── Mission Stats ─────────────────────────────────────── */}
        <section className="py-12 px-6 bg-[#0f0f1e] border-y border-white/[0.07]">
          <div className="max-w-3xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { num: '5',   label: 'Courses Planned' },
              { num: '20+', label: 'Lessons Available' },
              { num: '100%',label: 'Free, Always' },
              { num: '🌍',  label: 'Focus: Africa' },
            ].map((s, i) => (
              <div key={i} className="text-center">
                <div className="font-display text-3xl font-extrabold text-white mb-1">{s.num}</div>
                <div className="text-xs text-[#7878a0]">{s.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Courses ───────────────────────────────────────────── */}
        <section className="py-16 px-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-[10px] font-bold tracking-[2px] uppercase text-[#7878a0] mb-2">Curriculum</div>
            <h2 className="font-display text-2xl font-extrabold text-white mb-8">Courses I'm Building</h2>

            {/* Available */}
            <div className="mb-4">
              <Link to="/course/api-express"
                className="flex items-center gap-4 p-5 bg-[#0f0f1e] border border-accent/25 hover:border-accent/50 rounded-2xl transition-all group">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-2xl flex-shrink-0">⚡</div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-0.5">
                    <span className="font-display text-[15px] font-bold text-white">APIs for Beginners</span>
                    <span className="text-[10px] px-2 py-0.5 bg-brand_green/15 text-brand_green rounded-full font-bold">LIVE NOW</span>
                  </div>
                  <div className="text-xs text-[#7878a0]">with Express.js · 20 lessons · Interactive code runner</div>
                </div>
                <ArrowRight size={16} className="text-accent group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Coming soon */}
            <div className="space-y-3">
              {UPCOMING.map((c, i) => (
                <div key={i} className="flex items-center gap-4 p-5 bg-[#0f0f1e] border border-white/[0.06] rounded-2xl opacity-60">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
                    style={{ background: `${c.color}10`, border: `1px solid ${c.color}20` }}>
                    {c.icon}
                  </div>
                  <div className="flex-1">
                    <div className="font-display text-[15px] font-bold text-white mb-0.5">{c.title}</div>
                    <div className="text-xs text-[#7878a0]">{c.sub}</div>
                  </div>
                  <span className="text-[10px] text-[#7878a0] border border-white/10 px-2 py-1 rounded-lg">Coming Soon</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Partnership CTA ───────────────────────────────────── */}
        <section className="py-16 px-6 border-t border-white/[0.07]">
          <div className="max-w-3xl mx-auto text-center">
            <div className="text-[10px] font-bold tracking-[2px] uppercase text-accent mb-3">Work Together</div>
            <h2 className="font-display text-3xl font-extrabold text-white mb-4">Interested in Partnering?</h2>
            <p className="text-[15px] text-[#7878a0] leading-relaxed mb-8 max-w-xl mx-auto">
              Whether you're a company looking to sponsor content, a developer wanting to collaborate,
              or an organization building tech education in Africa — I'd love to hear from you.
            </p>
            <a href="mailto:rasheedsanni3@gmail.com"
              className="inline-flex items-center gap-2 px-8 py-4 bg-accent hover:bg-accent-dark text-white font-bold text-base rounded-xl transition-all shadow-xl shadow-accent/20">
              <Mail size={16} /> rasheedsanni3@gmail.com
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
