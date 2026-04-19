import logo from "@/assets/logo.png";

export function Logo({ className = "h-10 w-10" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <img src={logo} alt="Next Level Photography" className="h-full w-auto" />
      <div className="hidden sm:flex flex-col leading-tight">
        <span className="font-serif text-base text-ivory tracking-wider">Next Level</span>
        <span className="text-[0.55rem] uppercase tracking-[0.32em] text-gold">Photography</span>
      </div>
    </div>
  );
}
