import { useEffect, useMemo, useRef, useState } from "react";

interface CursorGlowOptions {
  count?: number; // number of trail glows
  radius?: number; // base radius in px
  intensity?: number; // base alpha (0-1)
  targetRef?: { current: HTMLElement | null }; // element to position gradients relative to
}

export const useCursorGlowTrail = (options: CursorGlowOptions = {}) => {
  const { count = 5, radius = 160, intensity = 0.18 } = options;
  const [positions, setPositions] = useState<Array<{ x: number; y: number }>>([]);
  const frame = useRef<number | null>(null);
  const lastClient = useRef<{ x: number; y: number } | null>(null);

  useEffect(() => {
    const computeLocal = (clientX: number, clientY: number) => {
      const el = (options as any).targetRef?.current as HTMLElement | undefined;
      if (el) {
        const rect = el.getBoundingClientRect();
        return { x: clientX - rect.left, y: clientY - rect.top };
      }
      return { x: clientX, y: clientY };
    };

    const onMove = (e: MouseEvent) => {
      lastClient.current = { x: e.clientX, y: e.clientY };
      if (frame.current) cancelAnimationFrame(frame.current);
      frame.current = requestAnimationFrame(() => {
        const { x, y } = computeLocal(e.clientX, e.clientY);
        setPositions((prev) => [{ x, y }, ...prev].slice(0, count));
      });
    };

    const onScrollOrResize = () => {
      if (!lastClient.current) return;
      if (frame.current) cancelAnimationFrame(frame.current);
      frame.current = requestAnimationFrame(() => {
        const { x, y } = computeLocal(lastClient.current!.x, lastClient.current!.y);
        setPositions((prev) => (prev.length ? [{ x, y }, ...prev.slice(1)] : prev));
      });
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("scroll", onScrollOrResize, { passive: true });
    window.addEventListener("resize", onScrollOrResize);
    return () => {
      if (frame.current) cancelAnimationFrame(frame.current);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("scroll", onScrollOrResize);
      window.removeEventListener("resize", onScrollOrResize);
    };
  }, [count, options]);

  const backgroundImage = useMemo(() => {
    if (!positions.length) return "none";
    return positions
      .map((p, i) => {
        const r = Math.max(48, radius - i * 22);
        const alpha = Math.max(0, intensity - i * (intensity / Math.max(1, count)));
        return `radial-gradient(${r}px circle at ${p.x}px ${p.y}px, hsl(var(--cyber-green)/${alpha}), transparent 60%)`;
      })
      .join(", ");
  }, [positions, radius, intensity, count]);

  return { backgroundImage };
};