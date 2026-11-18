import { useEffect, useRef, useState } from "react";
import { SkillMark } from "./SkillIcon";
import { heroIcons } from "../data/skills";

type Drift = { x: number; y: number; vx: number; vy: number; rot: number; vr: number };

const countFor = (width: number) => (width < 640 ? 8 : width < 1024 ? 11 : 15);

export function SkillDrift() {
  const hostRef = useRef<HTMLDivElement | null>(null);
  const nodesRef = useRef<(HTMLSpanElement | null)[]>([]);
  const driftRef = useRef<Drift[]>([]);
  const sizesRef = useRef<number[]>([]);
  const [count, setCount] = useState(() =>
    countFor(typeof window === "undefined" ? 1280 : window.innerWidth),
  );

  useEffect(() => {
    const onResize = () => setCount(countFor(window.innerWidth));
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;

    const nodes = nodesRef.current.slice(0, count).filter((node): node is HTMLSpanElement => Boolean(node));
    if (!nodes.length) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let width = 0;
    let height = 0;
    let raf = 0;
    let visible = true;
    let staticOnly = reduceMotion.matches;

    const apply = () => {
      nodes.forEach((node, index) => {
        const d = driftRef.current[index];
        if (!d) return;
        node.style.transform = `translate3d(${d.x.toFixed(2)}px, ${d.y.toFixed(2)}px, 0) rotate(${d.rot.toFixed(2)}deg)`;
      });
    };

    const scatter = () => {
      sizesRef.current = nodes.map((node) => node.offsetWidth);
      driftRef.current = nodes.map((_, index) => {
        const size = sizesRef.current[index] || 24;
        const speed = 0.1 + Math.random() * 0.2;
        const angle = Math.random() * Math.PI * 2;
        return {
          x: Math.random() * Math.max(1, width - size),
          y: Math.random() * Math.max(1, height - size),
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          rot: Math.random() * 16 - 8,
          vr: (Math.random() - 0.5) * 0.04,
        };
      });
      apply();
    };

    const resize = () => {
      const rect = host.getBoundingClientRect();
      const nextWidth = rect.width;
      const nextHeight = rect.height;
      if (!nextWidth || !nextHeight) return;
      const scaleX = width ? nextWidth / width : 1;
      const scaleY = height ? nextHeight / height : 1;
      width = nextWidth;
      height = nextHeight;

      if (driftRef.current.length !== nodes.length) {
        scatter();
        return;
      }

      driftRef.current.forEach((d, index) => {
        d.x = Math.min(Math.max(d.x * scaleX, 0), Math.max(0, width - (sizesRef.current[index] || 0)));
        d.y = Math.min(Math.max(d.y * scaleY, 0), Math.max(0, height - (sizesRef.current[index] || 0)));
      });
      apply();
    };

    const step = () => {
      nodes.forEach((node, index) => {
        const d = driftRef.current[index];
        if (!d) return;
        const size = sizesRef.current[index] || node.offsetWidth;
        d.x += d.vx;
        d.y += d.vy;
        d.rot += d.vr;

        if (d.rot > 10) d.vr = -Math.abs(d.vr);
        if (d.rot < -10) d.vr = Math.abs(d.vr);

        if (d.x < -size) d.x = width + size * 0.2;
        else if (d.x > width + size * 0.2) d.x = -size;
        if (d.y < -size) d.y = height + size * 0.2;
        else if (d.y > height + size * 0.2) d.y = -size;
      });
      apply();
    };

    const loop = () => {
      if (visible && !document.hidden) step();
      raf = window.requestAnimationFrame(loop);
    };

    resize();

    const observer = new ResizeObserver(() => resize());
    observer.observe(host);

    const intersection = new IntersectionObserver((entries) => {
      visible = entries[0]?.isIntersecting ?? true;
    });
    intersection.observe(host);

    const onMotionChange = () => {
      staticOnly = reduceMotion.matches;
      if (staticOnly) {
        window.cancelAnimationFrame(raf);
        raf = 0;
      } else {
        raf = window.requestAnimationFrame(loop);
      }
    };
    reduceMotion.addEventListener("change", onMotionChange);

    if (!staticOnly) raf = window.requestAnimationFrame(loop);

    return () => {
      window.cancelAnimationFrame(raf);
      observer.disconnect();
      intersection.disconnect();
      reduceMotion.removeEventListener("change", onMotionChange);
    };
  }, [count]);

  return (
    <div
      ref={hostRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
    >
      {heroIcons.slice(0, count).map((icon, index) => (
        <span
          key={icon}
          ref={(node) => {
            nodesRef.current[index] = node;
          }}
          className="absolute left-0 top-0 inline-flex text-ink opacity-40 will-change-transform"
        >
          <SkillMark name={icon} size={index % 3 === 0 ? 26 : index % 3 === 1 ? 22 : 18} mono />
        </span>
      ))}
    </div>
  );
}
