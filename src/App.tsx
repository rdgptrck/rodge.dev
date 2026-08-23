import { createContext, useContext, useEffect, useState } from "react";

type Theme = "dark" | "light";
const ThemeContext = createContext<{ theme: Theme; toggle: () => void }>({
  theme: "dark",
  toggle: () => { },
});
const useTheme = () => useContext(ThemeContext);
const DARK = {
  bg: "#121212",
  surface: "#0d0d0d",
  border: "#2a2a2a",
  text: "#F4F4F4",
  muted: "#888888",
  accent: "#00FF66",
  accentText: "#121212",
};
const LIGHT = {
  bg: "#F4F4F4",
  surface: "#EBEBEB",
  border: "#D0D0D0",
  text: "#121212",
  muted: "#555555",
  accent: "#007A33",
  accentText: "#F4F4F4",
};

const NAV_LINKS = [
  { label: "about", href: "#about" },
  { label: "projects", href: "#projects" },
  { label: "experience", href: "#experience" },
  { label: "contact", href: "#contact" },
];
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
];
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
];
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
    period: "2024 — 2024",
    role: "Operations Committee",
    company: "Association of Computer E-Students",
  },
];

function useActiveSection(ids: string[]) {
  const [active, setActive] = useState("");
  useEffect(() => {
    const observers = ids.map((id) => {
      const element = document.getElementById(id);
      if (!element) return null;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(id);
        },
        { rootMargin: "-40% 0px -55% 0px" },
      );
      observer.observe(element);
      return observer;
    });
    return () => observers.forEach((observer) => observer?.disconnect());
  }, [ids]);
  return active;
}

function ThemeToggle() {
  const { theme, toggle } = useTheme();
  const colors = theme === "dark" ? DARK : LIGHT;
  const isDark = theme === "dark";
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
  );
}

function Nav() {
  const { theme } = useTheme();
  const colors = theme === "dark" ? DARK : LIGHT;
  const [scrolled, setScrolled] = useState(false);
  const active = useActiveSection([
    "about",
    "projects",
    "experience",
    "contact",
  ]);
  useEffect(() => {
    const handle = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handle);
    return () => window.removeEventListener("scroll", handle);
  }, []);
  const background =
    theme === "dark" ? "rgba(18,18,18,0.95)" : "rgba(244,244,244,0.95)";
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
  );
}

function ProfileAvatar({ colors }: { colors: typeof DARK }) {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="relative group shrink-0">
      <div
        className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-xl overflow-hidden flex items-center justify-center transition-all duration-300 group-hover:scale-[1.02]"
        style={{
          background: colors.surface,
          border: `1px solid ${colors.accent}`,
          boxShadow: `0 0 20px -5px ${colors.accent}33`,
        }}
      >
        {!imgError ? (
          <img
            src="/avatar.svg"
            alt="Rodge Pangilinan"
            onError={() => setImgError(true)}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center p-3 text-center select-none">
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center mb-1.5"
              style={{
                background: `${colors.accent}15`,
                border: `1px dashed ${colors.accent}80`,
              }}
            >
              <span
                className="font-mono text-base font-bold"
                style={{ color: colors.accent }}
              >
                RP
              </span>
            </div>
            <span
              className="font-mono text-[10px] tracking-widest uppercase"
              style={{ color: colors.muted }}
            >
              avatar.raw
            </span>
          </div>
        )}

        {/* Cyber grid / scanline subtle accent */}
        <div
          className="absolute inset-0 pointer-events-none opacity-15"
          style={{
            backgroundImage: `linear-gradient(${colors.border} 1px, transparent 1px), linear-gradient(90deg, ${colors.border} 1px, transparent 1px)`,
            backgroundSize: "10px 10px",
          }}
        />

        {/* Tech Corner Crosshairs */}
        <span
          className="absolute top-1.5 left-1.5 font-mono text-[9px] leading-none select-none pointer-events-none"
          style={{ color: colors.accent }}
        >
          ┌
        </span>
        <span
          className="absolute top-1.5 right-1.5 font-mono text-[9px] leading-none select-none pointer-events-none"
          style={{ color: colors.accent }}
        >
          ┐
        </span>
        <span
          className="absolute bottom-1.5 left-1.5 font-mono text-[9px] leading-none select-none pointer-events-none"
          style={{ color: colors.accent }}
        >
          └
        </span>
        <span
          className="absolute bottom-1.5 right-1.5 font-mono text-[9px] leading-none select-none pointer-events-none"
          style={{ color: colors.accent }}
        >
          ┘
        </span>
      </div>

      {/* Terminal status badge */}
      <div
        className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 px-2.5 py-0.5 rounded-full font-mono text-[9px] uppercase tracking-wider flex items-center gap-1.5 whitespace-nowrap shadow-sm"
        style={{
          background: colors.bg,
          border: `1px solid ${colors.border}`,
          color: colors.muted,
        }}
      >
        <span
          className="w-1.5 h-1.5 rounded-full animate-pulse"
          style={{ background: colors.accent }}
        />
        <span>user.profile</span>
      </div>
    </div>
  );
}

function About() {
  const { theme } = useTheme();
  const colors = theme === "dark" ? DARK : LIGHT;
  return (
    <section id="about" className="py-24 px-6 pt-32">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-baseline gap-4 mb-16">
          <span
            className="font-mono text-xs tracking-widest uppercase"
            style={{ color: colors.accent }}
          >
            01 / about
          </span>
          <div className="flex-1 h-px" style={{ background: colors.border }} />
        </div>
        <div className="grid md:grid-cols-[1fr_380px] gap-12 mb-16 items-start">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col sm:flex-row sm:items-center gap-6">
              <ProfileAvatar colors={colors} />
              <div>
                <h1
                  className="font-mono font-bold leading-none mb-3"
                  style={{ fontSize: "clamp(2.5rem, 5.5vw, 4.5rem)" }}
                >
                  <span style={{ color: colors.text }}>Rodge</span>
                  <br />
                  <span style={{ color: colors.accent }}>Pangilinan</span>
                </h1>
                <p
                  className="font-mono text-sm"
                  style={{ color: colors.accent }}
                >
                  Aspiring Software Engineer · CS Undergrad · Tech Enthusiast
                </p>
              </div>
            </div>
            <p
              className="font-sans text-base leading-relaxed"
              style={{ color: colors.muted }}
            >
              Third-year CS student who genuinely enjoys building things — from
              responsive web apps to interactive prototypes and practical side
              projects. I care a lot about writing clean code and shipping
              projects that actually work for real people.
            </p>
          </div>
          <TerminalCard colors={colors} />
        </div>
        <div className="mt-16">
          <div
            className="font-mono text-xs tracking-widest uppercase mb-8"
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
  );
}

function TerminalCard({ colors }: { colors: typeof DARK }) {
  return (
    <div
      className="font-mono text-sm"
      style={{
        background: colors.surface,
        border: `1px solid ${colors.border}`,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        className="flex items-center gap-2 px-4 py-3"
        style={{ borderBottom: `1px solid ${colors.border}` }}
      >
        <span
          className="w-2.5 h-2.5 rounded-full"
          style={{ background: "#FF5F57" }}
        />
        <span
          className="w-2.5 h-2.5 rounded-full"
          style={{ background: "#FFBD2E" }}
        />
        <span
          className="w-2.5 h-2.5 rounded-full"
          style={{ background: "#28CA42" }}
        />
        <span className="ml-3 text-xs" style={{ color: colors.muted }}>
          aboutme.sh
        </span>
      </div>
      <div className="p-5 space-y-3 flex-1">
        <div>
          <span style={{ color: colors.accent }}>$ </span>
          <span style={{ color: colors.text }}> profile.json</span>
        </div>
        <div
          className="text-xs leading-relaxed pl-2 py-3"
          style={{
            borderLeft: `2px solid ${colors.accent}`,
            color: colors.muted,
          }}
        >
          <div>
            <span style={{ color: colors.accent }}>&quot;name&quot;</span>:
            &quot;Rodge Pangilinan&quot;,
          </div>
          <div>
            <span style={{ color: colors.accent }}>&quot;role&quot;</span>:
            &quot;Junior CS Student&quot;,
          </div>
          <div>
            <span style={{ color: colors.accent }}>&quot;school&quot;</span>:
            &quot;BS Computer Science&quot;,
          </div>
          <div>
            <span style={{ color: colors.accent }}>&quot;year&quot;</span>: 3,
          </div>
          <div>
            <span style={{ color: colors.accent }}>&quot;status&quot;</span>:{" "}
            <span style={{ color: colors.accent }}>
              &quot;open to internships&quot;
            </span>
            ,
          </div>
          <div>
            <span style={{ color: colors.accent }}>&quot;location&quot;</span>:
            &quot;Philippines&quot;
          </div>
        </div>
        <div className="pt-2">
          <span style={{ color: colors.accent }}>$ </span>
          <span style={{ color: colors.muted }}>uptime</span>
        </div>
        <div className="text-xs" style={{ color: colors.muted }}>
          coding for <span style={{ color: colors.text }}>2+ years</span> ·
          fueled by codex XD
        </div>
        <div
          className="pt-2 flex items-center gap-2"
          style={{ color: colors.border }}
        >
          <span style={{ color: colors.accent }}>$</span>
          <span className="animate-pulse">▊</span>
        </div>
      </div>
    </div>
  );
}

function Projects() {
  const { theme } = useTheme();
  const colors = theme === "dark" ? DARK : LIGHT;
  const [hovered, setHovered] = useState<string | null>(null);
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
  );
}

function Experience() {
  const { theme } = useTheme();
  const colors = theme === "dark" ? DARK : LIGHT;
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
  );
}

function Contact() {
  const { theme } = useTheme();
  const colors = theme === "dark" ? DARK : LIGHT;
  const [copied, setCopied] = useState(false);
  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText("rodge.pangilinan@gmail.com");
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = "mailto:rodge.pangilinan@gmail.com";
    }
  };
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
  ];
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
  );
}

function Footer() {
  const { theme } = useTheme();
  const colors = theme === "dark" ? DARK : LIGHT;
  return (
    <footer
      className="py-8 px-6"
      style={{ borderTop: `1px solid ${colors.border}` }}
    >
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="font-mono text-xs" style={{ color: colors.border }}>
          © 2026 Rodge Pangilinan. Built with React + Tailwind CSS.
        </span>
        <div
          className="flex items-center gap-2 font-mono text-xs"
          style={{ color: colors.muted }}
        >
          <span style={{ color: colors.accent }}>●</span>
          <span>available for work</span>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  const [theme, setTheme] = useState<Theme>("dark");
  const toggle = () =>
    setTheme((value) => (value === "dark" ? "light" : "dark"));
  const colors = theme === "dark" ? DARK : LIGHT;
  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      <div
        style={{
          background: colors.bg,
          color: colors.text,
          minHeight: "100vh",
          transition: "background 0.3s ease, color 0.3s ease",
        }}
      >
        <Nav />
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
    </ThemeContext.Provider>
  );
}
