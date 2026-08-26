import { useTheme, DARK, LIGHT } from "@/context/ThemeContext"

export default function ThemeToggle() {
  const { theme, toggle } = useTheme()

  const colors = theme === "dark" ? DARK : LIGHT

  const isDark = theme === "dark"

  return (
    <button
      onClick={toggle}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="relative flex items-center gap-2 font-mono text-xs transition-all duration-150 select-none"
      style={{ color: colors.muted }}
      onMouseEnter={(event) =>
        (event.currentTarget.style.color = colors.accent)
      }
      onMouseLeave={(event) => (event.currentTarget.style.color = colors.muted)}
    >
      <span>{isDark ? "◐" : "◑"}</span>
      <span
        className="hidden sm:inline tracking-widest uppercase"
        style={{ fontSize: "10px" }}
      >
        {isDark ? "light" : "dark"}
      </span>
      <span
        className="relative inline-flex items-center w-10 h-5 rounded-full transition-colors duration-300"
        style={{
          background: isDark ? "#1a1a1a" : "#D0D0D0",

          border: `1px solid ${colors.border}`,
        }}
      >
        <span
          className="absolute w-3.5 h-3.5 rounded-full transition-all duration-300"
          style={{
            background: colors.accent,

            left: isDark ? "2px" : "calc(100% - 18px)",
          }}
        />
      </span>
    </button>
  )
}
