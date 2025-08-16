import React, { useEffect } from "react";
import { gsap } from "gsap";

export function Cursor() {
  useEffect(() => {
    const cursor1 = document.querySelector(".cursor1") as HTMLElement;
    const cursor2 = document.querySelector(".cursor2") as HTMLElement;

    if (!cursor1 || !cursor2) return;

    function handleMove(e: MouseEvent) {
      gsap.to(cursor1, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
        ease: "power2.out",
      });

      gsap.to(cursor2, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.3,
        ease: "power2.out",
      });
    }

    function handleMouseEnter() {
      gsap.to(cursor2, {
        width: 40,
        height: 40,
        duration: 0.3,
        ease: "power2.out",
      });
    }

    function handleMouseLeave() {
      gsap.to(cursor2, {
        width: 24,
        height: 24,
        duration: 0.3,
        ease: "power2.out",
      });
    }

    document.addEventListener("mousemove", handleMove);

    // Add hover effects for interactive elements
    const interactiveElements = document.querySelectorAll("a, button, [role='button']");
    interactiveElements.forEach(el => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      document.removeEventListener("mousemove", handleMove);
      interactiveElements.forEach(el => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  return (
    <>
      <div className="cursor cursor1"></div>
      <div className="cursor cursor2"></div>
    </>
  );
}