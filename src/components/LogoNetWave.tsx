import React from "react";
import Image from "next/image";

interface LogoNetWaveProps {
  className?: string;
  variant?: "dark" | "light";
}

export default function LogoNetWave({ className = "", variant = "dark" }: LogoNetWaveProps) {
  const isLight = variant === "light";

  return (
    <div className={`inline-flex items-center gap-2.5 sm:gap-3 select-none ${className}`}>
      {/* Logo Officiel Image logo.jpg */}
      <div className="relative w-9 h-9 sm:w-10 sm:h-10 shrink-0 rounded-xl overflow-hidden border border-[#0A9678]/40 shadow-sm shadow-[#0A9678]/20 bg-white">
        <Image
          src="/logo.jpg"
          alt="NetWave Studio Logo Officiel"
          fill
          sizes="40px"
          className="object-cover"
          priority
        />
      </div>

      {/* Typographie de Marque */}
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
