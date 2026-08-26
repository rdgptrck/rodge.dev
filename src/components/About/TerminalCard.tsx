import { DARK } from "@/context/ThemeContext"

export default function TerminalCard({ colors }: { colors: typeof DARK }) {
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
            &quot;Rodge Patrick Pangilinan&quot;,
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
              &quot;development ongoing&quot;
            </span>
            ,
          </div>
          <div>
            <span style={{ color: colors.accent }}>&quot;location&quot;</span>:
            &quot;Caloocan, Philippines&quot;
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
  )
}
