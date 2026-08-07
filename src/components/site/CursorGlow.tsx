import { useEffect, useRef } from "react";

export function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    let raf = 0;
    const pos = { x: window.innerWidth / 2, y: window.innerHeight / 3 };
    const target = { ...pos };

    const onMove = (e: MouseEvent) => {
      target.x = e.clientX;
      target.y = e.clientY;
    };

    const loop = () => {
      pos.x += (target.x - pos.x) * 0.08;
      pos.y += (target.y - pos.y) * 0.08;
      if (ref.current) {
        ref.current.style.transform = `translate3d(${pos.x - 300}px, ${pos.y - 300}px, 0)`;
      }
      raf = requestAnimationFrame(loop);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    raf = requestAnimationFrame(loop);
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-0 hidden size-[600px] rounded-full opacity-40 blur-[110px] lg:block"
      style={{
        background:
          "radial-gradient(circle, color-mix(in oklab, var(--violet) 30%, transparent), transparent 65%)",
      }}
    />
  );
}
