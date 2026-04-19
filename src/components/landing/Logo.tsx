import logo from "@/assets/logo.png";

export function Logo({ className = "h-10" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <img src={logo} alt="Next Level Photography" className="h-full w-auto" />
      <div className="hidden sm:flex flex-col leading-tight">
        <span className="font-display font-extrabold text-base text-foreground tracking-tight uppercase">
          NextLevel
        </span>
        <span className="label-cap text-amber !text-[0.55rem]">Photography</span>
      </div>
    </div>
  );
}
