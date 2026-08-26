import { ThemeProvider, useTheme, DARK, LIGHT } from "@/context/ThemeContext"
import Header from "@/components/Header"
import About from "@/components/About"
import Projects from "@/components/Projects"
import Experience from "@/components/Experience"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"

function PortfolioContent() {
  const { theme } = useTheme()

  const colors = theme === "dark" ? DARK : LIGHT

  return (
    <div
      style={{
        background: colors.bg,

        color: colors.text,

        minHeight: "100vh",

        transition: "background 0.3s ease, color 0.3s ease",
      }}
    >
      <Header />
      <main id="main-content">
        <About />
        <div style={{ borderTop: `1px solid ${colors.border}` }} />
        <Projects />
        <div style={{ borderTop: `1px solid ${colors.border}` }} />
        <Experience />
        <div style={{ borderTop: `1px solid ${colors.border}` }} />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default function App() {
  return (
    <ThemeProvider>
      <PortfolioContent />
    </ThemeProvider>
  )
}
