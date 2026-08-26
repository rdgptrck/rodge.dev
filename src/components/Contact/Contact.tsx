import { useState } from "react"
import { useTheme, DARK, LIGHT } from "@/context/ThemeContext"

export default function Contact() {
  const { theme } = useTheme()

  const colors = theme === "dark" ? DARK : LIGHT

  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText("rodge.pangilinan@gmail.com")

      setCopied(true)

      setTimeout(() => setCopied(false), 2000)
    } catch {
      window.location.href = "mailto:rodge.pangilinan@gmail.com"
    }
  }

  const links = [
    {
      cmd: "email",

      value: "rodge.pangilinan@gmail.com",

      action: copyEmail,

      note: copied ? "// copied!" : "// click to copy",
    },

    {
      cmd: "github",

      value: "github.com/rdgptrck",

      href: "https://github.com/rdgptrck",
    },

    {
      cmd: "linkedin",

      value: "linkedin.com/in/rodge-patrick-pangilinan",

      href: "https://linkedin.com/in/rodge-patrick-pangilinan",
    },
  ]

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12">
          <span
            className="font-mono text-xs tracking-widest uppercase"
            style={{ color: colors.accent }}
          >
            04 / contact
          </span>
          <h2
            className="font-mono text-3xl font-bold mt-2"
            style={{ color: colors.text }}
          >
            Get in touch
          </h2>
        </div>
        <p
          className="font-sans text-base leading-relaxed mb-12 max-w-lg"
          style={{ color: colors.muted }}
        >
          Open to internships, part-time dev work, and entry-level
          opportunities. Also happy to collaborate on open-source projects or
          just chat tech. Response time: typically {"<"} 24h.
        </p>
        <div
          className="p-6 font-mono text-sm space-y-3"
          style={{
            background: colors.surface,

            border: `1px solid ${colors.border}`,
          }}
        >
          <div
            className="text-xs mb-4 pb-4"
            style={{
              color: colors.border,

              borderBottom: `1px solid ${colors.border}`,
            }}
          >
            ~ contact.sh
          </div>
          {links.map(({ cmd, value, action, href, note }) => (
            <div key={cmd} className="flex flex-wrap items-center gap-2">
              <span style={{ color: colors.accent }}>$</span>
              <span style={{ color: colors.muted }}>open</span>
              <span style={{ color: colors.text }}>{cmd}</span>
              <span style={{ color: colors.border }}>=</span>
              {action ? (
                <button
                  onClick={action}
                  className="transition-colors duration-150 underline underline-offset-4 cursor-pointer"
                  style={{
                    color: colors.muted,

                    textDecorationColor: colors.border,
                  }}
                >
                  &quot;{value}&quot;
                </button>
              ) : (
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors duration-150 underline underline-offset-4"
                  style={{
                    color: colors.muted,

                    textDecorationColor: colors.border,
                  }}
                >
                  &quot;{value}&quot;
                </a>
              )}
              {note && (
                <span
                  className="text-xs"
                  style={{
                    color:
                      copied && cmd === "email" ? colors.accent : colors.border,
                  }}
                >
                  {note}
                </span>
              )}
            </div>
          ))}
          <div
            className="pt-4 flex items-center gap-2"
            style={{ color: colors.border }}
          >
            <span style={{ color: colors.accent }}>$</span>
            <span className="animate-pulse">▊</span>
          </div>
        </div>
      </div>
    </section>
  )
}
