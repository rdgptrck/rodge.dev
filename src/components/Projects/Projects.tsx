import { useState } from "react"
import { useTheme, DARK, LIGHT } from "@/context/ThemeContext"

const PROJECTS = [
  {
    id: "01",

    title: "Corevia",

    description:
      "Ongoing client project in the design and planning phase. Geared toward pharmacy inventory management with automated batch expiration tracking, stock level monitoring, and spoilage reduction workflows.",

    stack: ["React", "Tailwind CSS", "Node.js", "SQLite"],

    year: "2026",

    badge: "In Planning",
  },

  {
    id: "02",

    title: "ShuttleZone",

    description:
      "Point-of-Sale and inventory management system engineered for badminton facility operations. Handles equipment rental tracking, court booking schedules, sales processing, and real-time inventory updates with relational database persistence.",

    stack: ["C#", ".NET", "MySQL", "Visual Studio"],

    year: "2026",
  },

  {
    id: "03",

    title: "Enterprise Attendance & Payroll System",

    description:
      "Desktop-based enterprise management utility featuring automated attendance tracking, shift and tax deduction calculations, and secure localized employee records management via SQLite.",

    stack: [".NET", "C#", "SQLite", "Visual Studio"],

    year: "2025",
  },

  {
    id: "04",

    title: "Reactify",

    description:
      "Interactive educational web application featuring a dynamic Periodic Table of Elements. Includes a sandbox simulation mode that visualizes chemical combinations and reactions based on element properties.",

    stack: ["JavaScript", "HTML5", "CSS3"],

    year: "2025",
  },
]

export default function Projects() {
  const { theme } = useTheme()

  const colors = theme === "dark" ? DARK : LIGHT

  const [hovered, setHovered] = useState<string | null>(null)

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12">
          <span
            className="font-mono text-xs tracking-widest uppercase"
            style={{ color: colors.accent }}
          >
            02 / projects
          </span>
          <h2
            className="font-mono text-3xl font-bold mt-2"
            style={{ color: colors.text }}
          >
            Projects I took part in
          </h2>
        </div>
        <div
          className="space-y-px"
          style={{ borderTop: `1px solid ${colors.border}` }}
        >
          {PROJECTS.map((project) => (
            <div
              key={project.id}
              className="group relative py-8 transition-all duration-200 cursor-default"
              style={{
                borderBottom: `1px solid ${colors.border}`,

                background:
                  hovered === project.id
                    ? theme === "dark"
                      ? "rgba(0,255,102,0.02)"
                      : "rgba(0,122,51,0.03)"
                    : "transparent",
              }}
              onMouseEnter={() => setHovered(project.id)}
              onMouseLeave={() => setHovered(null)}
            >
              <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-8">
                <span
                  className="font-mono text-xs shrink-0 w-8 pt-1"
                  style={{
                    color:
                      hovered === project.id ? colors.accent : colors.border,
                  }}
                >
                  {project.id}
                </span>
                <div className="flex-1">
                  <div className="flex flex-wrap items-baseline gap-3 mb-3">
                    <h3
                      className="font-mono text-xl font-bold transition-colors duration-150"
                      style={{
                        color:
                          hovered === project.id ? colors.accent : colors.text,
                      }}
                    >
                      {project.title}
                    </h3>
                    <span
                      className="font-mono text-xs"
                      style={{ color: colors.border }}
                    >
                      {project.year}
                    </span>
                    {project.badge && (
                      <span
                        className="font-mono text-xs px-2 py-0.5"
                        style={{
                          border: `1px solid ${colors.accent}`,

                          color: colors.accent,

                          opacity: 0.8,
                        }}
                      >
                        {project.badge}
                      </span>
                    )}
                  </div>
                  <p
                    className="font-sans text-sm leading-relaxed mb-4 max-w-2xl"
                    style={{ color: colors.muted }}
                  >
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((item) => (
                      <span
                        key={item}
                        className="font-mono text-xs px-2 py-0.5"
                        style={{
                          border: `1px solid ${colors.border}`,

                          color: colors.muted,
                        }}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
