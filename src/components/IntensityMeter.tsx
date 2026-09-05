interface Props {
  value: number;
  total: number;
  className?: string;
}

const IntensityMeter = ({ value, total, className = "" }: Props) => (
  <div className={`flex items-center gap-2 ${className}`}>
    <span className="text-[10px] uppercase tracking-[0.14em] text-muted-foreground">Intensità</span>
    <span className="flex items-center gap-[3px]" role="img" aria-label={`Intensità ${value} su ${total}`}>
      {Array.from({ length: total }).map((_, i) => (
        <span
          key={i}
          className={`w-[6px] h-[6px] rounded-full ${i < value ? "bg-primary" : "bg-border"}`}
        />
      ))}
    </span>
    <span className="text-[11px] font-medium text-foreground tabular-nums">
      {value}/{total}
    </span>
  </div>
);

export const parseIntensity = (badge?: string) => {
  if (!badge) return null;
  const m = badge.match(/(\d+)\s*\/\s*(\d+)/);
  if (!m) return null;
  return { value: Number(m[1]), total: Number(m[2]) };
};

export const badgeExtra = (badge?: string) => {
  if (!badge) return null;
  const parts = badge.split("·").map((p) => p.trim());
  const rest = parts.filter((p) => !/intensità/i.test(p));
  return rest.length ? rest.join(" · ") : null;
};

export default IntensityMeter;
