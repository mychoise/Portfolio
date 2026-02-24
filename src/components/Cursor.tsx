import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ArrowUpRight } from "lucide-react";

const Cursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const arrowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const arrow = arrowRef.current;
    const hero = document.querySelector(".hero-area");

    if (!hero || !cursor) return;

    // Move cursor
    const moveCursor = (e) => {
      gsap.to(cursor, {
        x: e.clientX - cursor.offsetWidth / 2,
        y: e.clientY - cursor.offsetHeight / 2,
        duration: 0.15,
        ease: "power2.out",
      });
    };

    // Show / Hide
    const showCursor = () =>
      gsap.to(cursor, { opacity: 1, scale: 1, duration: 0.2 });
    const hideCursor = () =>
      gsap.to(cursor, { opacity: 0, scale: 0.5, duration: 0.2 });

    // Click effect
    const clickDown = () => gsap.to(cursor, { scale: 0.6, duration: 0.15 });
    const clickUp = () => gsap.to(cursor, { scale: 1, duration: 0.15 });

    hero.addEventListener("mousemove", moveCursor);
    hero.addEventListener("mouseenter", showCursor);
    hero.addEventListener("mouseleave", hideCursor);
    hero.addEventListener("mousedown", clickDown);
    hero.addEventListener("mouseup", clickUp);

    // Interactive elements
    const interactive = hero.querySelectorAll(
      "a, button, [role='button'], input, textarea",
    );

    interactive.forEach((el) => {
      const enter = () => {
        gsap.to(cursor, { scale: 1.2, duration: 0.2 });
        gsap.to(arrow, { opacity: 1, scale: 1, duration: 0.2 });
      };
      const leave = () => {
        gsap.to(cursor, { scale: 1, duration: 0.2 });
        gsap.to(arrow, { opacity: 0, scale: 0, duration: 0.2 });
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
        el.removeEventListener("mouseenter", el._enter);
        el.removeEventListener("mouseleave", el._leave);
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
      {/* Lucide Arrow */}
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
