const items = [
  "Sony Alpha",
  "Nikon Z",
  "Canon R",
  "Vogue India",
  "Bazaar",
  "Cosmo",
  "Apple Pro",
  "Met Gala",
  "Fashion Week",
];

export function Marquee() {
  const row = [...items, ...items, ...items];
  return (
    <div className="relative bg-ink border-y border-border py-7 overflow-hidden">
      <div className="flex w-max animate-marquee gap-16 whitespace-nowrap">
        {row.map((t, i) => (
          <div key={i} className="flex items-center gap-16">
            <span className="display text-2xl md:text-3xl text-foreground/80">
              {t}
            </span>
            <span className="text-amber text-xl">●</span>
          </div>
        ))}
      </div>
    </div>
  );
}
