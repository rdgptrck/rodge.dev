import { useState } from "react"
import { DARK } from "@/context/ThemeContext"

export default function ProfileAvatar({ colors }: { colors: typeof DARK }) {
  const [imgError, setImgError] = useState(false)

  return (
    <div className="relative group shrink-0">
      <div
        className="relative w-36 h-36 sm:w-40 sm:h-40 rounded-2xl overflow-hidden flex items-center justify-center transition-all duration-300 group-hover:scale-[1.02]"
        style={{
          background: colors.surface,

          border: `1px solid ${colors.accent}`,

          boxShadow: `0 0 24px -6px ${colors.accent}33`,
        }}
      >
        {!imgError ? (
          <img
            src="/2x2_Formal-removebg.png"
            alt="Rodge Patrick Pangilinan"
            onError={() => setImgError(true)}
            className="w-full h-full object-cover object-top"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center p-3 text-center select-none">
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center mb-2"
              style={{
                background: `${colors.accent}15`,

                border: `1px dashed ${colors.accent}80`,
              }}
            >
              <span
                className="font-mono text-xl font-bold"
                style={{ color: colors.accent }}
              >
                RP
              </span>
            </div>
            <span
              className="font-mono text-[11px] tracking-widest uppercase"
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

            backgroundSize: "12px 12px",
          }}
        />

        {/* Tech Corner Crosshairs */}
        <span
          className="absolute top-2 left-2 font-mono text-[10px] leading-none select-none pointer-events-none"
          style={{ color: colors.accent }}
        >
          ┌
        </span>
        <span
          className="absolute top-2 right-2 font-mono text-[10px] leading-none select-none pointer-events-none"
          style={{ color: colors.accent }}
        >
          ┐
        </span>
        <span
          className="absolute bottom-2 left-2 font-mono text-[10px] leading-none select-none pointer-events-none"
          style={{ color: colors.accent }}
        >
          └
        </span>
        <span
          className="absolute bottom-2 right-2 font-mono text-[10px] leading-none select-none pointer-events-none"
          style={{ color: colors.accent }}
        >
          ┘
        </span>
      </div>
    </div>
  )
}
