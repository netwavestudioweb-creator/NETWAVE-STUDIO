import React from "react";

interface LogoNetWaveProps {
  className?: string;
  variant?: "dark" | "light";
}

export default function LogoNetWave({ className = "", variant = "dark" }: LogoNetWaveProps) {
  const isLight = variant === "light";

  return (
    <div className={`inline-flex items-center gap-2 sm:gap-2.5 select-none ${className}`}>
      {/* Icon Squircle Mark */}
      <div className="relative w-8 h-8 sm:w-9 sm:h-9 shrink-0 rounded-xl bg-gradient-to-br from-[#241047] via-[#16082E] to-[#0B0318] p-1.5 flex items-center justify-center border border-[#00E5A3]/40 shadow-xs shadow-[#0A9678]/20">
        <svg viewBox="0 0 128 128" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
          <polygon points="26,98 42,98 64,48 48,48" fill="#C084FC" />
          <polygon points="40,98 64,36 88,98 72,98 64,74 56,98" fill="#00E5A3" />
          <polygon points="86,48 102,48 86,98 70,98" fill="#9333EA" />
          <polygon points="48,72 80,72 75,64 53,64" fill="#FFFFFF" />
          <circle cx="64" cy="24" r="7" fill="#FFFFFF" />
        </svg>
      </div>

      {/* Typography Text */}
      <div className="flex items-baseline leading-none font-poppins font-extrabold tracking-tight">
        <span className={`text-[20px] sm:text-[23px] ${isLight ? "text-white" : "text-[#281450]"}`}>
          NetWave
        </span>
        <span className="text-[20px] sm:text-[23px] text-[#0A9678] ml-0.5">
          Studio
        </span>
      </div>
    </div>
  );
}
