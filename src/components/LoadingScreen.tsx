import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [done, setDone] = useState(false);
  const [removed, setRemoved] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setDone(true), 1800);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (!done) return;
    const t = setTimeout(() => setRemoved(true), 700);
    return () => clearTimeout(t);
  }, [done]);

  if (removed) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-gradient-to-b from-white via-[#f4f8f4] to-white transition-opacity duration-700 ${
        done ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
      data-testid="loading-screen"
    >
      {/* Soft brand glow */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full bg-primary/5 blur-3xl" />

      <div className="relative flex items-center justify-center">
        {/* Outer spinning ring (green + gold arc) */}
        <div
          className="absolute h-36 w-36 rounded-full border-[3px] border-primary/10 border-t-primary border-r-secondary animate-spin"
          style={{ animationDuration: "0.9s" }}
        />
        {/* Inner counter-rotating ring */}
        <div
          className="absolute h-28 w-28 rounded-full border-2 border-transparent border-b-secondary/70 animate-spin"
          style={{ animationDuration: "1.6s", animationDirection: "reverse" }}
        />
        {/* Logo */}
        <img
          src="/logo.png"
          alt="HiredNest"
          className="h-16 w-auto object-contain animate-pulse"
        />
      </div>

      <div className="mt-10 text-2xl font-bold font-serif text-primary tracking-tight">
        HiredNest
      </div>
      <div className="mt-2 flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.3em] text-muted-foreground">
        Loading
        <span className="inline-flex gap-1">
          <span className="w-1 h-1 rounded-full bg-secondary animate-bounce" style={{ animationDelay: "0ms" }} />
          <span className="w-1 h-1 rounded-full bg-secondary animate-bounce" style={{ animationDelay: "150ms" }} />
          <span className="w-1 h-1 rounded-full bg-secondary animate-bounce" style={{ animationDelay: "300ms" }} />
        </span>
      </div>
    </div>
  );
}
