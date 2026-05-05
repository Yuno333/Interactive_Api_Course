import { useState, useEffect, useCallback } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { ChevronLeft, ChevronRight, CheckCircle2, Circle, Menu, X, BookOpen, Terminal } from 'lucide-react'
import { COURSES_DATA } from '../data/courses.js'
import { useProgressStore, useUIStore } from '../store/index.js'
import LessonContent from '../components/course/LessonContent.jsx'
import CodeRunner from '../components/runner/CodeRunner.jsx'
import { Badge } from '../components/ui/index.jsx'

const TAG_COLOR = { Concept: 'blue', Code: 'green', Auth: 'yellow', Advanced: 'purple', Project: 'green', Deploy: 'accent' }
const SECTION_COLORS = {
  'Fundamentals':    'text-brand_blue',
  'Express.js':      'text-brand_green',
  'Auth & Security': 'text-brand_yellow',
  'Project':         'text-brand_purple',
}

export default function Player() {
  const { courseId } = useParams()
  const navigate     = useNavigate()
  const course       = COURSES_DATA[courseId]

  const { setLesson, markDone, getCurrentLesson, isCompleted, getProgress } = useProgressStore()
  const { sidebarOpen, toggleSidebar, setSidebar } = useUIStore()

  const [current, setCurrent] = useState(() => getCurrentLesson(courseId))

  useEffect(() => { if (!course) navigate('/') }, [course])
  useEffect(() => { setSidebar(window.innerWidth >= 768) }, [])

  // Keyboard navigation
  useEffect(() => {
    const handler = (e) => {
      if (e.target.tagName === 'TEXTAREA' || e.target.tagName === 'INPUT') return
      if (e.key === 'ArrowRight' && current < lessons.length - 1) goTo(current + 1)
      if (e.key === 'ArrowLeft'  && current > 0) goTo(current - 1)
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [current])

  if (!course) return null

  const lessons = course.lessons
  const lesson  = lessons[current]
  const progress = getProgress(courseId, lessons.length)

  // Group lessons by section
  const sections = lessons.reduce((acc, l) => {
    if (!acc[l.section]) acc[l.section] = []
    acc[l.section].push(l)
    return acc
  }, {})

  const goTo = useCallback((idx) => {
    markDone(courseId, current)
    setCurrent(idx)
    setLesson(courseId, idx)
    document.getElementById('lesson-content')?.scrollTo({ top: 0, behavior: 'smooth' })
  }, [current, courseId])

  const prev = () => current > 0 && goTo(current - 1)
  const next = () => current < lessons.length - 1 && goTo(current + 1)

  return (
    <div className="flex flex-col h-screen overflow-hidden bg-brand-bg">

      {/* ── Topbar ─────────────────────────────────────────────── */}
      <header className="flex-shrink-0 h-[54px] flex items-center gap-3 px-4 bg-[#0f0f1e] border-b border-white/[0.07] z-10">
        <button onClick={toggleSidebar}
          className="p-1.5 rounded-lg text-[#7878a0] hover:text-white hover:bg-white/5 transition-all">
          {sidebarOpen ? <X size={17} /> : <Menu size={17} />}
        </button>

        <div className="w-px h-5 bg-white/[0.07]" />

        <Link to="/" className="flex items-center gap-1.5 text-[#7878a0] hover:text-white text-xs transition-colors">
          <ChevronLeft size={14} /> All Courses
        </Link>

        <div className="w-px h-5 bg-white/[0.07]" />
        <span className="text-sm font-semibold text-white truncate">{course.title}</span>

        {/* Progress */}
        <div className="ml-auto flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-2">
            <div className="w-28 h-1 bg-[#1e1e38] rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-accent to-brand_blue rounded-full transition-all duration-500"
                style={{ width: `${progress}%` }} />
            </div>
            <span className="text-xs text-[#7878a0]">
              <span className="text-white font-semibold">{current + 1}</span>/{lessons.length}
            </span>
          </div>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">

        {/* ── Sidebar ──────────────────────────────────────────── */}
        <aside className={`flex-shrink-0 bg-[#0f0f1e] border-r border-white/[0.07] overflow-y-auto flex flex-col transition-all duration-200
          ${sidebarOpen ? 'w-[260px]' : 'w-0 overflow-hidden'}`}>

          <div className="px-4 py-3.5 border-b border-white/[0.07]">
            <div className="font-display text-[13px] font-bold text-white mb-0.5">{course.title}</div>
            <div className="text-[11px] text-[#7878a0]">{lessons.length} lessons · {course.duration}</div>
          </div>

          {/* Lesson list grouped by section */}
          {Object.entries(sections).map(([section, sectionLessons]) => (
            <div key={section} className="py-2 border-b border-white/[0.07] last:border-none">
              <div className={`text-[9px] font-bold tracking-[2px] uppercase px-4 py-2 ${SECTION_COLORS[section] || 'text-[#7878a0]'}`}>
                {section}
              </div>
              {sectionLessons.map((l) => {
                const done   = isCompleted(courseId, l.id)
                const active = current === l.id
                return (
                  <button key={l.id} onClick={() => goTo(l.id)}
                    className={`w-full flex items-center gap-2.5 px-4 py-2 text-left transition-all text-[12.5px] border-l-2
                      ${active ? 'bg-accent/8 text-accent border-accent font-semibold'
                               : done  ? 'text-[#5a5a7a] border-transparent hover:bg-white/3 hover:text-[#9898b8]'
                                       : 'text-[#7878a0] border-transparent hover:bg-white/3 hover:text-white'}`}>
                    <span className={`w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center text-[10px] font-bold transition-all
                      ${active ? 'bg-accent text-white'
                               : done  ? 'bg-brand_green text-black'
                                       : 'bg-[#1e1e38] text-[#7878a0]'}`}>
                      {done && !active ? <CheckCircle2 size={12} /> : l.id + 1}
                    </span>
                    <span className="leading-tight">{l.title}</span>
                    {l.runnable && <Terminal size={9} className="ml-auto flex-shrink-0 text-brand_green/60" />}
                  </button>
                )
              })}
            </div>
          ))}

          {/* Instructor chip */}
          <div className="m-3 mt-auto p-3 rounded-xl border border-accent/15 bg-gradient-to-br from-accent/5 to-brand_blue/5">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-accent to-brand_blue flex items-center justify-center text-xs font-bold text-white flex-shrink-0">R</div>
              <div>
                <div className="text-[12px] font-bold text-white leading-tight">Rasheed Sanni</div>
                <div className="text-[10px] text-[#7878a0]">CS Student · Tech Educator</div>
              </div>
            </div>
            <p className="text-[10.5px] text-[#7878a0] leading-relaxed mb-2">Pioneering tech education in Africa.</p>
            <div className="flex flex-col gap-1.5">
              <a href="https://x.com/yuno_x999" target="_blank" rel="noopener"
                className="flex items-center gap-1.5 text-[10.5px] text-[#7878a0] hover:text-white px-2 py-1 bg-[#161628] rounded-md border border-white/[0.07] hover:border-white/[0.13] transition-all">
                <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                @yuno_x999
              </a>
              <a href="mailto:rasheedsanni3@gmail.com"
                className="flex items-center gap-1.5 text-[10.5px] text-[#7878a0] hover:text-white px-2 py-1 bg-[#161628] rounded-md border border-white/[0.07] hover:border-white/[0.13] transition-all">
                ✉️ Partnership enquiries
              </a>
            </div>
          </div>
        </aside>

        {/* ── Lesson Content ────────────────────────────────────── */}
        <main id="lesson-content" className="flex-1 overflow-y-auto">
          <div className="max-w-[820px] mx-auto px-6 md:px-10 py-10">

            {/* Lesson header */}
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-3">
                <Badge color={TAG_COLOR[lesson.tag] || 'blue'}>{lesson.tag}</Badge>
                <span className="text-xs text-[#7878a0]">Lesson {current + 1} of {lessons.length}</span>
                {isCompleted(courseId, lesson.id) && (
                  <span className="flex items-center gap-1 text-[11px] text-brand_green">
                    <CheckCircle2 size={12} /> Completed
                  </span>
                )}
              </div>
              <h1 className="font-display text-[30px] font-extrabold text-white leading-tight mb-3">{lesson.title}</h1>
              <p className="text-[15px] text-[#7878a0] leading-[1.75] max-w-[640px]">{lesson.description}</p>
            </div>

            {/* Code runner (if runnable) */}
            {lesson.runnable && (
              <CodeRunner title={lesson.runnerTitle} starterCode={lesson.starterCode} />
            )}

            {/* Lesson content blocks */}
            <LessonContent blocks={lesson.content} />

            {/* Final lesson CTA */}
            {current === lessons.length - 1 && (
              <div className="mt-10 p-7 rounded-2xl bg-gradient-to-br from-brand_green/10 to-brand_blue/5 border border-brand_green/20 text-center">
                <div className="text-3xl mb-3">🎉</div>
                <h3 className="font-display text-xl font-bold text-brand_green mb-2">Course Complete!</h3>
                <p className="text-sm text-[#7878a0] mb-5 max-w-md mx-auto leading-relaxed">
                  You now know REST APIs, Express.js, middleware, JWT auth, ORM, pagination, and deployment.
                  Build something real — that's the best way to cement this knowledge.
                </p>
                <Link to="/"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-brand_green text-black rounded-lg text-sm font-bold hover:brightness-110 transition-all">
                  Explore More Courses →
                </Link>
              </div>
            )}

            {/* Nav buttons */}
            <div className="flex items-center justify-between mt-10 pt-6 border-t border-white/[0.07]">
              <button onClick={prev} disabled={current === 0}
                className="flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold border border-white/[0.07] bg-[#161628] text-white hover:border-white/[0.13] disabled:opacity-30 disabled:cursor-not-allowed transition-all">
                <ChevronLeft size={15} /> Previous
              </button>

              <span className="text-xs text-[#7878a0] hidden sm:block">
                Use <kbd className="px-1.5 py-0.5 bg-[#1e1e38] border border-white/10 rounded text-[10px]">←</kbd>
                <kbd className="ml-1 px-1.5 py-0.5 bg-[#1e1e38] border border-white/10 rounded text-[10px]">→</kbd> to navigate
              </span>

              {current < lessons.length - 1 ? (
                <button onClick={next}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold bg-accent hover:bg-accent-dark text-white transition-all">
                  Next <ChevronRight size={15} />
                </button>
              ) : (
                <Link to="/"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold bg-brand_green text-black hover:brightness-110 transition-all">
                  All Courses <ChevronRight size={15} />
                </Link>
              )}
            </div>

          </div>
        </main>
      </div>
    </div>
  )
}
