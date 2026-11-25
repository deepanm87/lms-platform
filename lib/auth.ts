export const PRO_PLAN_SLUG = 'pro'

export const PRO_PLAN_ID = 
  process.env.NEXT_PUBLIC_CLERK_PRO_PLAN_ID

export const TUTOR = {
  name: "AI Tutor",
  role: "Lead Instructor",
  tagline: "Full-Stack and AI systems demystified",
  bio: "Teaching millions of developers worldwide to ship production full-stack web and AI applications - from Next.js and real-time backends to autonomous AI agents.",
  stats: [
    { label: "Developers Taught", value: "1M+" },
    { label: "Production Builds", value: "250+" },
    { label: "Avg. Lesson Depth", value: "Hands-On" }
  ]
} as const

export function isAdminRole(metadata: unknown): boolean {
  if (!metadata || typeof metadata !== "object") {
    return false
  }
  const record = metadata as Record<string, unknown>
  return record.role === "admin"
}