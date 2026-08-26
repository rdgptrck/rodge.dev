import { createContext, useContext, useState, type ReactNode } from "react"

export type Theme = "dark" | "light"

export const DARK = {
  bg: "#121212",
  surface: "#0d0d0d",
  border: "#2a2a2a",
  text: "#F4F4F4",
  muted: "#888888",
  accent: "#00FF66",
  accentText: "#121212",
}

export const LIGHT = {
  bg: "#F4F4F4",
  surface: "#EBEBEB",
  border: "#D0D0D0",
  text: "#121212",
  muted: "#555555",
  accent: "#007A33",
  accentText: "#F4F4F4",
}

export type ThemeColors = typeof DARK

interface ThemeContextType {
  theme: Theme
  toggle: () => void
}

export const ThemeContext = createContext<ThemeContextType>({
  theme: "light",
  toggle: () => {},
})

export const useTheme = () => useContext(ThemeContext)

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>("light")

  const toggle = () =>
    setTheme((value) => (value === "dark" ? "light" : "dark"))

  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      {children}
    </ThemeContext.Provider>
  )
}
