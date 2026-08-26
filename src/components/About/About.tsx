import { useTheme, DARK, LIGHT } from "@/context/ThemeContext"
import ProfileAvatar from "./ProfileAvatar"
import TerminalCard from "./TerminalCard"

const TECH_STACK = [
  {
    category: "Languages",

    items: ["C / C#", "Java", "JavaScript / TypeScript", "Python"],
  },

  {
    category: "Frontend",

    items: ["React", "Next.js", "Tailwind CSS", "HTML/CSS"],
  },

  {
    category: "Backend",

    items: ["Node.js", "Express", "PostgreSQL", "REST APIs"],
  },

  { category: "Tools", items: ["Git", "Figma", "VS Code", "Codex"] },
]

export default function About() {
  const { theme } = useTheme()

  const colors = theme === "dark" ? DARK : LIGHT

  return (
    <section id="about" className="py-16 lg:py-20 pt-20 lg:pt-24 px-6">
      <div className="max-w-5xl mx-auto w-full">
        <div className="flex items-baseline gap-4 mb-8 lg:mb-10">
          <span
            className="font-mono text-xs tracking-widest uppercase"
            style={{ color: colors.accent }}
          >
            01 / about
          </span>
          <div className="flex-1 h-px" style={{ background: colors.border }} />
        </div>
        <div className="grid md:grid-cols-[1fr_380px] gap-10 lg:gap-14 mb-10 lg:mb-12 items-start">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-8">
              <ProfileAvatar colors={colors} />
              <div>
                <h1
                  className="font-mono font-bold leading-[1.08] tracking-tight mb-3"
                  style={{ fontSize: "clamp(2.35rem, 5.2vw, 4rem)" }}
                >
                  <span style={{ color: colors.text }}>Rodge Patrick</span>
                  <br />
                  <span style={{ color: colors.accent }}>Pangilinan</span>
                </h1>
                <p
                  className="font-mono text-sm sm:text-base font-medium"
                  style={{ color: colors.accent }}
                >
                  Aspiring Software Engineer · CS Undergrad
                </p>
              </div>
            </div>
            <p
              className="font-sans text-base leading-relaxed max-w-xl"
              style={{ color: colors.muted }}
            >
              Third-year CS student who genuinely enjoys building things — from
              responsive web apps to interactive prototypes and practical side
              projects. I care a lot about writing clean code and shipping
              projects that actually work for real people.
            </p>
            <p
              className="font-sans text-base leading-relaxed max-w-xl"
              style={{ color: colors.muted }}
            >
              Currently looking for internship and entry-level opportunities
              where I can contribute, grow fast, and work alongside people
              smarter than me. When I&apos;m not coding, I&apos;m probably on
              the badminton court, watching tech vids, or debugging something I
              wrote at 2am.
            </p>
          </div>
          <TerminalCard colors={colors} />
        </div>
        <div className="pt-2">
          <div
            className="font-mono text-xs tracking-widest uppercase mb-6"
            style={{ color: colors.muted }}
          >
            tech stack
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {TECH_STACK.map(({ category, items }) => (
              <div key={category}>
                <div
                  className="font-mono text-xs tracking-widest uppercase mb-4 pb-2"
                  style={{
                    color: colors.accent,

                    borderBottom: `1px solid ${colors.border}`,
                  }}
                >
                  {category}
                </div>
                <div className="space-y-2">
                  {items.map((item) => (
                    <div
                      key={item}
                      className="font-mono text-xs flex items-center gap-2 transition-colors duration-150 cursor-default"
                      style={{ color: colors.muted }}
                      onMouseEnter={(event) =>
                        (event.currentTarget.style.color = colors.text)
                      }
                      onMouseLeave={(event) =>
                        (event.currentTarget.style.color = colors.muted)
                      }
                    >
                      <span style={{ color: colors.border }}>›</span>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
