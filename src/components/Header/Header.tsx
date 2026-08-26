import { useEffect, useState } from "react"
import { useTheme, DARK, LIGHT } from "@/context/ThemeContext"
import ThemeToggle from "./ThemeToggle"

const NAV_LINKS = [
  { label: "about", href: "#about" },

  { label: "projects", href: "#projects" },

  { label: "experience", href: "#experience" },

  { label: "contact", href: "#contact" },
]

function useActiveSection(ids: string[]) {
  const [active, setActive] = useState("")

  useEffect(() => {
    const observers = ids.map((id) => {
      const element = document.getElementById(id)

      if (!element) return null

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(id)
        },

        { rootMargin: "-40% 0px -55% 0px" },
      )

      observer.observe(element)

      return observer
    })

    return () => observers.forEach((observer) => observer?.disconnect())
  }, [ids])

  return active
}

export default function Header() {
  const { theme } = useTheme()

  const colors = theme === "dark" ? DARK : LIGHT

  const [scrolled, setScrolled] = useState(false)

  const active = useActiveSection([
    "about",

    "projects",

    "experience",

    "contact",
  ])

  useEffect(() => {
    const handle = () => setScrolled(window.scrollY > 40)

    window.addEventListener("scroll", handle)

    return () => window.removeEventListener("scroll", handle)
  }, [])

  const background =
    theme === "dark" ? "rgba(18,18,18,0.95)" : "rgba(244,244,244,0.95)"

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? background : "transparent",

        backdropFilter: scrolled ? "blur(12px)" : "none",

        borderBottom: scrolled
          ? `1px solid ${colors.border}`
          : "1px solid transparent",
      }}
    >
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <a
          href="#about"
          className="font-mono text-sm tracking-wider"
          style={{ color: colors.accent }}
        >
          rodge.dev
        </a>
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="font-mono text-xs tracking-widest uppercase transition-colors duration-150"
              style={{ color: active === label ? colors.accent : colors.muted }}
            >
              {active === label ? `> ${label}` : label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <span
            className="font-mono text-xs flex items-center gap-2"
            style={{ color: colors.accent }}
          >
            <span
              className="inline-block w-2 h-2 rounded-full animate-pulse"
              style={{ background: colors.accent }}
            />
            <span className="hidden sm:inline">available</span>
          </span>
        </div>
      </div>
    </nav>
  )
}
