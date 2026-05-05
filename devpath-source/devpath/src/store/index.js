import { create } from 'zustand'
import { persist } from 'zustand/middleware'

// ── Progress store (persisted to localStorage) ──────────────────
export const useProgressStore = create(
  persist(
    (set, get) => ({
      // { [courseId]: { completedLessons: Set<number>, currentLesson: number } }
      courses: {},

      setLesson: (courseId, lessonIndex) =>
        set(state => ({
          courses: {
            ...state.courses,
            [courseId]: {
              ...state.courses[courseId],
              currentLesson: lessonIndex,
            },
          },
        })),

      markDone: (courseId, lessonIndex) =>
        set(state => {
          const existing = state.courses[courseId]?.completedLessons || []
          return {
            courses: {
              ...state.courses,
              [courseId]: {
                ...state.courses[courseId],
                completedLessons: [...new Set([...existing, lessonIndex])],
              },
            },
          }
        }),

      getProgress: (courseId, totalLessons) => {
        const c = get().courses[courseId]
        if (!c) return 0
        return Math.round(((c.completedLessons?.length || 0) / totalLessons) * 100)
      },

      getCurrentLesson: (courseId) =>
        get().courses[courseId]?.currentLesson || 0,

      isCompleted: (courseId, lessonIndex) =>
        get().courses[courseId]?.completedLessons?.includes(lessonIndex) || false,

      resetCourse: (courseId) =>
        set(state => ({
          courses: { ...state.courses, [courseId]: { completedLessons: [], currentLesson: 0 } },
        })),
    }),
    {
      name: 'devpath-progress',
      // Stringify Set as array for JSON
      serialize: (state) => JSON.stringify(state),
      deserialize: (str) => JSON.parse(str),
    }
  )
)

// ── UI store (not persisted) ─────────────────────────────────────
export const useUIStore = create((set) => ({
  sidebarOpen: true,
  toggleSidebar: () => set(state => ({ sidebarOpen: !state.sidebarOpen })),
  setSidebar: (v) => set({ sidebarOpen: v }),
}))
