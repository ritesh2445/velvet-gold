const items = [
  "Wedding Photography",
  "Pre-Wedding Shoots",
  "Cinematic Videography",
  "Wedding Albums",
  "Candid Photography",
  "Reels & Highlights",
  "Drone Coverage",
  "Engagement Shoots",
];

export function Marquee() {
  const row = [...items, ...items];
  return (
    <div className="relative bg-ink border-y border-border py-6 overflow-hidden">
      <div className="flex w-max animate-marquee gap-14 whitespace-nowrap">
        {row.map((t, i) => (
          <div key={i} className="flex items-center gap-14">
            <span className="font-serif italic text-2xl md:text-3xl text-ivory/85">
              {t}
            </span>
            <span className="text-gold text-2xl">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
}
