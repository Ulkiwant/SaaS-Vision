export default function Logo({ light = false }: { light?: boolean }) {
  return (
    <span className="inline-flex flex-col" aria-label="SaaS Vision">
      <span
        className={`font-logo text-[16px] leading-[1.05] tracking-wide ${
          light ? "text-mint/70" : "text-muted"
        }`}
      >
        SaaS
      </span>
      <span
        className={`font-logo text-[21px] font-bold leading-[1.1] ${
          light ? "text-white" : "text-ink"
        }`}
      >
        Vision
      </span>
      <span aria-hidden className="mt-[5px] h-[3.5px] w-12 rounded-full bg-leaf" />
    </span>
  );
}
