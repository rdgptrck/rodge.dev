import { useTheme, DARK, LIGHT } from "@/context/ThemeContext"

export default function Footer() {
  const { theme } = useTheme()

  const colors = theme === "dark" ? DARK : LIGHT

  return (
    <footer
      className="py-4 px-6"
      style={{ borderTop: `1px solid ${colors.border}` }}
    >
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="font-mono text-xs" style={{ color: colors.border }}>
          © 2026 Rodge Pangilinan. Built with React + Tailwind CSS.
        </span>
      </div>
    </footer>
  )
}
