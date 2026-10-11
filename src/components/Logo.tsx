type LogoProps = {
  variant?: "light" | "dark";
  className?: string;
};

/** Monogramme NW (bandes obliques) + mot-symbole. `dark` = posé sur fond sombre. */
export default function Logo({ variant = "light", className = "" }: LogoProps) {
  const stroke = variant === "dark" ? "#8E65D8" : "#281450";
  const accent = variant === "dark" ? "#3DDBB0" : "#0A9678";

  return (
    <span className={`flex items-center gap-2.5 ${className}`}>
      <LogoMark stroke={stroke} accent={accent} />
      <span
        className={`font-display text-xl font-bold tracking-[-0.02em] ${
          variant === "dark" ? "text-white" : "text-ink"
        }`}
      >
        NetWave{" "}
        <span className={variant === "dark" ? "text-white" : "text-emerald"}>Studio</span>
      </span>
    </span>
  );
}

export function LogoMark({
  stroke = "#281450",
  accent = "#0A9678",
  className = "h-6 w-11",
}: {
  stroke?: string;
  accent?: string;
  className?: string;
}) {
  return (
    <svg viewBox="0 20 230 125" className={className} aria-hidden="true">
      <polygon points="10,140 40,140 85,25 55,25" fill={stroke} />
      <polygon points="55,25 85,25 130,140 100,140" fill={accent} />
      <polygon points="100,140 130,140 175,25 145,25" fill={accent} />
      <polygon points="115,25 145,25 100,140 70,140" fill={stroke} />
      <polygon points="145,25 175,25 220,140 190,140" fill={stroke} />
    </svg>
  );
}
