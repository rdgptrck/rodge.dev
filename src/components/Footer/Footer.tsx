import { useTheme, DARK, LIGHT } from "@/context/ThemeContext"

export default function Footer() {
  const { theme } = useTheme()

  const colors = theme === "dark" ? DARK : LIGHT

  return (
    <footer
      className="py-4 px-6"
      style={{ borderTop: `1px solid ${colors.border}` }}
    >
      <div className="max-w-5xl mx-auto flex items-center justify-center text-center">
        <span className="font-mono text-xs" style={{ color: colors.border }}>
          © 2026 Rodge Patrick Pangilinan. Built with React + Tailwind CSS.
        </span>
      </div>
    </footer>
  )
}
