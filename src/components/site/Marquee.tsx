const items = [
  "Sistemas Web",
  "Aplicativos",
  "Mobilidade Urbana",
  "Gestão Pública",
  "Inteligência Artificial",
  "Business Intelligence",
  "Cloud",
  "APIs",
  "Integrações",
  "Dashboards",
  "UX/UI",
  "Automação",
];

export function Marquee() {
  const loop = [...items, ...items];
  return (
    <div className="relative border-y border-border py-5">
      <div
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32"
        style={{ background: "linear-gradient(90deg, var(--background), transparent)" }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32"
        style={{ background: "linear-gradient(270deg, var(--background), transparent)" }}
        aria-hidden
      />
      <div className="flex overflow-hidden">
        <div className="animate-marquee flex shrink-0 items-center gap-8 pr-8">
          {loop.map((item, i) => (
            <span key={`${item}-${i}`} className="flex items-center gap-8 whitespace-nowrap">
              <span className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                {item}
              </span>
              <span
                className="size-1 rounded-full"
                style={{ background: "var(--gradient-brand)" }}
                aria-hidden
              />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
