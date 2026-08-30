import { useTheme, DARK, LIGHT } from "@/context/ThemeContext"

const EXPERIENCE = [
  {
    period: "2024 — Present",

    role: "Student Assistant (Staff)",

    company: "Management Information System Office",
  },

  {
    period: "2026 — 2027",

    role: "Vice President Internal",

    company: "Association of Computer E-Students",
  },

  {
    period: "2025 — 2026",

    role: "Executive, Technical Committee",

    company: "Computer Science Council",
  },

  {
    period: "2025 — 2026",

    role: "Technical Committee",

    company: "College of Liberal Arts and Sciences",
  },

  {
    period: "2024 — 2025",

    role: "Operations Committee",

    company: "Association of Computer E-Students",
  },
]

export default function Experience() {
  const { theme } = useTheme()

  const colors = theme === "dark" ? DARK : LIGHT

  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12">
          <span
            className="font-mono text-xs tracking-widest uppercase"
            style={{ color: colors.accent }}
          >
            03 / experience
          </span>
          <h2
            className="font-mono text-3xl font-bold mt-2"
            style={{ color: colors.text }}
          >
            Clubs & Organizations
          </h2>
        </div>
        <div className="relative">
          <div
            className="absolute left-[140px] top-0 bottom-0 w-px hidden md:block"
            style={{ background: colors.border }}
          />
          <div>
            {EXPERIENCE.map((experience) => (
              <div
                key={`${experience.period}-${experience.role}`}
                className="group flex flex-col md:flex-row gap-4 md:gap-0 py-8 transition-all duration-200"
                style={{ borderBottom: `1px solid ${colors.border}` }}
              >
                <div className="md:w-[140px] md:pr-8 shrink-0">
                  <span
                    className="font-mono text-xs"
                    style={{ color: colors.muted }}
                  >
                    {experience.period}
                  </span>
                </div>
                <div className="md:w-3 md:mx-[-6px] shrink-0 hidden md:flex items-start justify-center pt-1.5">
                  <div
                    className="w-3 h-3 rounded-full border transition-all duration-200 group-hover:scale-125"
                    style={{
                      borderColor: colors.accent,

                      background: colors.bg,
                    }}
                  />
                </div>
                <div className="md:pl-8 flex-1">
                  <div className="flex flex-wrap items-baseline gap-2">
                    <h3
                      className="font-mono text-base font-bold"
                      style={{ color: colors.text }}
                    >
                      {experience.role}
                    </h3>
                    <span
                      className="font-mono text-sm"
                      style={{ color: colors.accent }}
                    >
                      @ {experience.company}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
