export default function Logo({ light = false }: { light?: boolean }) {
  return (
    <span className="inline-flex items-center gap-2.5">
      <span
        aria-hidden
        className={`relative flex h-9 w-9 items-center justify-center rounded-xl text-lg font-serif italic ${
          light ? "bg-mint text-pine" : "bg-pine text-mint"
        }`}
      >
        S
        <span className="absolute right-1.5 top-1.5 h-1.5 w-1.5 rounded-full bg-leaf" />
      </span>
      <span
        className={`text-[17px] font-extrabold tracking-tight ${
          light ? "text-white" : "text-ink"
        }`}
      >
        SaaS&nbsp;Vision
      </span>
    </span>
  );
}
