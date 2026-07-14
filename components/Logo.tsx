export default function Logo({ light = false }: { light?: boolean }) {
  return (
    <span className="inline-flex items-center gap-2.5" aria-label="SaaS Vision">
      <span
        aria-hidden
        className="flex h-8 w-8 items-center justify-center rounded-[9px] bg-grad-primary text-[13px] font-extrabold text-white shadow-soft"
      >
        SV
      </span>
      <span
        className={`font-display text-[19px] font-bold tracking-[-0.01em] ${
          light ? "text-white" : "text-ink"
        }`}
      >
        SaaS Vision
      </span>
    </span>
  );
}
