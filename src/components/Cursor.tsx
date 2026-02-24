import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ArrowUpRight } from "lucide-react";

type InteractiveElement = HTMLElement & {
  _enter?: (e: Event) => void;
  _leave?: (e: Event) => void;
};

const Cursor = () => {
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const arrowRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const arrow = arrowRef.current;
    const hero = document.querySelector<HTMLElement>(".hero-area");

    if (!hero || !cursor) return;

    const moveCursor = (e: MouseEvent) => {
      gsap.to(cursor, {
        x: e.clientX - cursor.offsetWidth / 2,
        y: e.clientY - cursor.offsetHeight / 2,
        duration: 0.15,
        ease: "power2.out",
      });
    };

    const showCursor = () =>
      gsap.to(cursor, { opacity: 1, scale: 1, duration: 0.2 });

    const hideCursor = () =>
      gsap.to(cursor, { opacity: 0, scale: 0.5, duration: 0.2 });

    const clickDown = () => gsap.to(cursor, { scale: 0.6, duration: 0.15 });

    const clickUp = () => gsap.to(cursor, { scale: 1, duration: 0.15 });

    hero.addEventListener("mousemove", moveCursor);
    hero.addEventListener("mouseenter", showCursor);
    hero.addEventListener("mouseleave", hideCursor);
    hero.addEventListener("mousedown", clickDown);
    hero.addEventListener("mouseup", clickUp);

    const interactive = hero.querySelectorAll<InteractiveElement>(
      "a, button, [role='button'], input, textarea",
    );

    interactive.forEach((el) => {
      const enter = () => {
        gsap.to(cursor, { scale: 1.2, duration: 0.2 });
        if (arrow) {
          gsap.to(arrow, { opacity: 1, scale: 1, duration: 0.2 });
        }
      };

      const leave = () => {
        gsap.to(cursor, { scale: 1, duration: 0.2 });
        if (arrow) {
          gsap.to(arrow, { opacity: 0, scale: 0, duration: 0.2 });
        }
      };

      el.addEventListener("mouseenter", enter);
      el.addEventListener("mouseleave", leave);

      el._enter = enter;
      el._leave = leave;
    });

    return () => {
      hero.removeEventListener("mousemove", moveCursor);
      hero.removeEventListener("mouseenter", showCursor);
      hero.removeEventListener("mouseleave", hideCursor);
      hero.removeEventListener("mousedown", clickDown);
      hero.removeEventListener("mouseup", clickUp);

      interactive.forEach((el) => {
        if (el._enter) el.removeEventListener("mouseenter", el._enter);
        if (el._leave) el.removeEventListener("mouseleave", el._leave);
      });
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="w-6 h-6 rounded-full bg-white/20 backdrop-blur-[6px] flex items-center justify-center shadow-lg"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        pointerEvents: "none",
        zIndex: 9999,
        opacity: 0,
      }}
    >
      <ArrowUpRight
        ref={arrowRef}
        size={12}
        color="white"
        style={{ transform: "scale(0)", opacity: 0 }}
      />
    </div>
  );
};

export default Cursor;
