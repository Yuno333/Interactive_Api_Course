import { Link } from 'react-router-dom'
import { BookOpen, Clock, Layers, ArrowRight, Lock, Play, Star, Users, Zap } from 'lucide-react'
import { CATALOG } from '../data/courses.js'
import { useProgressStore } from '../store/index.js'
import { Badge, ProgressRing } from '../components/ui/index.jsx'
import Navbar from '../components/layout/Navbar.jsx'
import Footer from '../components/layout/Footer.jsx'

const LEVEL_COLOR = { Beginner: 'green', Intermediate: 'yellow', Advanced: 'red' }

function CourseCard({ course }) {
  const { getProgress } = useProgressStore()
  const progress = getProgress(course.id, course.lessons)
  const started  = progress > 0

  return (
    <div className={`group relative flex flex-col bg-[#0f0f1e] border rounded-2xl overflow-hidden transition-all duration-300
      ${course.available
        ? 'border-white/[0.07] hover:border-white/[0.15] hover:-translate-y-1 cursor-pointer'
        : 'border-white/[0.04] opacity-60'}`}>

      {/* Gradient top bar */}
      <div className="h-1 w-full" style={{ background: `linear-gradient(90deg, ${course.color}80, ${course.color}20)` }} />

      {/* Card body */}
      <div className="p-6 flex flex-col flex-1">

        {/* Icon + badges */}
        <div className="flex items-start justify-between mb-4">
          <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
            style={{ background: `${course.color}15`, border: `1px solid ${course.color}25` }}>
            {course.icon}
          </div>
          <div className="flex flex-col items-end gap-1.5">
            <Badge color={LEVEL_COLOR[course.level] || 'blue'}>{course.level}</Badge>
            {!course.available && (
              <span className="flex items-center gap-1 text-[10px] text-[#7878a0] font-semibold">
                <Lock size={9} /> Coming Soon
              </span>
            )}
            {course.available && started && (
              <span className="flex items-center gap-1 text-[10px] text-brand_green font-semibold">
                <Play size={9} className="fill-brand_green" /> {progress}% done
              </span>
            )}
          </div>
        </div>

        {/* Title */}
        <h3 className="font-display text-[17px] font-bold text-white mb-0.5 leading-tight">{course.title}</h3>
        <div className="text-[12px] text-[#7878a0] mb-3" style={{ color: course.color }}>{course.subtitle}</div>
        <p className="text-[13px] text-[#7878a0] leading-relaxed mb-4 flex-1">{course.description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {course.tags.map(t => (
            <span key={t} className="text-[10px] px-2 py-0.5 bg-[#1e1e38] text-[#7878a0] rounded-md font-mono">{t}</span>
          ))}
        </div>

        {/* Meta */}
        <div className="flex items-center justify-between text-[11px] text-[#7878a0] pt-3.5 border-t border-white/[0.06]">
          <span className="flex items-center gap-1"><BookOpen size={11} /> {course.lessons} lessons</span>
          <span className="flex items-center gap-1"><Clock size={11} /> {course.duration}</span>

          {course.available ? (
            <Link to={`/course/${course.id}`}
              className="flex items-center gap-1 text-accent font-semibold hover:gap-2 transition-all">
              {started ? 'Continue' : 'Start'} <ArrowRight size={11} />
            </Link>
          ) : (
            <span className="text-[#3a3a60]">Notify me</span>
          )}
        </div>

        {/* Progress bar */}
        {course.available && started && (
          <div className="mt-3 h-1 bg-[#1e1e38] rounded-full overflow-hidden">
            <div className="h-full rounded-full transition-all duration-700"
              style={{ width: `${progress}%`, background: course.color }} />
          </div>
        )}
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative pt-20 pb-24 px-6 overflow-hidden">
        {/* Background glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full opacity-20"
            style={{ background: 'radial-gradient(ellipse, #e94560 0%, transparent 70%)' }} />
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[200px] rounded-full opacity-10"
            style={{ background: 'radial-gradient(ellipse, #4fc3f7 0%, transparent 70%)' }} />
        </div>

        <div className="relative max-w-4xl mx-auto text-center">
          {/* Instructor chip */}
          <Link to="/instructor"
            className="inline-flex items-center gap-2.5 px-4 py-2 mb-6 rounded-full bg-[#0f0f1e] border border-white/10 hover:border-white/20 transition-all">
            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-accent to-brand_blue flex items-center justify-center text-[10px] font-bold text-white">R</div>
            <span className="text-xs text-[#7878a0]">By <span className="text-white font-semibold">Rasheed Sanni</span> · Pioneering Tech Education in Africa</span>
            <ArrowRight size={12} className="text-[#7878a0]" />
          </Link>

          <h1 className="font-display text-5xl md:text-6xl font-extrabold text-white leading-[1.1] mb-5 tracking-tight">
            Learn to Build.<br />
            <span className="gradient-text">Ship Real Products.</span>
          </h1>
          <p className="text-lg text-[#7878a0] max-w-2xl mx-auto leading-relaxed mb-8">
            Hands-on technical courses for the next generation of African developers.
            From APIs to AI — everything you need to build production-grade software.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link to="/course/api-express"
              className="flex items-center gap-2 px-7 py-3.5 bg-accent hover:bg-accent-dark text-white font-bold text-sm rounded-xl transition-all shadow-lg shadow-accent/20 hover:shadow-accent/30">
              <Play size={15} className="fill-white" /> Start Learning Free
            </Link>
            <Link to="/instructor"
              className="flex items-center gap-2 px-7 py-3.5 bg-white/5 hover:bg-white/8 border border-white/10 hover:border-white/20 text-white font-semibold text-sm rounded-xl transition-all">
              Meet the Instructor
            </Link>
          </div>

          {/* Stats */}
          <div className="flex items-center justify-center gap-8 mt-12">
            {[
              { icon: <Layers size={15} />, label: '5 Courses', sub: 'planned' },
              { icon: <BookOpen size={15} />, label: '20+ Lessons', sub: 'available now' },
              { icon: <Zap size={15} />, label: 'Interactive', sub: 'code runner' },
              { icon: <Star size={15} />, label: 'Free', sub: 'always' },
            ].map((s, i) => (
              <div key={i} className="flex flex-col items-center gap-1">
                <div className="flex items-center gap-1.5 text-white font-bold text-sm">{s.icon} {s.label}</div>
                <div className="text-[11px] text-[#7878a0]">{s.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Course Catalog ────────────────────────────────────── */}
      <section className="pb-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-end justify-between mb-8">
            <div>
              <div className="text-[10px] font-bold tracking-[2px] uppercase text-accent mb-2">Courses</div>
              <h2 className="font-display text-3xl font-extrabold text-white">Everything you need to ship</h2>
            </div>
            <div className="text-sm text-[#7878a0]">
              <span className="text-brand_green font-semibold">1</span> available &nbsp;·&nbsp;
              <span className="text-[#7878a0]">4</span> coming soon
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {CATALOG.map(course => <CourseCard key={course.id} course={course} />)}
          </div>
        </div>
      </section>

      {/* ── Instructor Strip ──────────────────────────────────── */}
      <section className="py-16 px-6 border-t border-white/[0.07]">
        <div className="max-w-3xl mx-auto flex flex-col md:flex-row items-center gap-8">
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-accent to-brand_blue flex-shrink-0 flex items-center justify-center text-3xl font-display font-extrabold text-white shadow-xl shadow-accent/20">
            R
          </div>
          <div className="flex-1 text-center md:text-left">
            <div className="text-[11px] font-bold tracking-widest uppercase text-accent mb-1">Your Instructor</div>
            <h3 className="font-display text-2xl font-extrabold text-white mb-2">Rasheed Sanni</h3>
            <p className="text-[14px] text-[#7878a0] leading-relaxed">
              CS student and technology educator on a mission to pioneer accessible tech education across Africa.
              Making complex topics genuinely simple — one course at a time.
            </p>
          </div>
          <div className="flex flex-col gap-2 flex-shrink-0">
            <a href="https://x.com/yuno_x999" target="_blank" rel="noopener"
              className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 hover:border-white/20 rounded-lg text-sm text-white transition-all">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              @yuno_x999
            </a>
            <a href="mailto:rasheedsanni3@gmail.com"
              className="flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/25 hover:bg-accent/15 rounded-lg text-sm text-accent transition-all">
              ✉️ Partner with me
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
