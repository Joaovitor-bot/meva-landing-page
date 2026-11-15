
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import "../styles/SpaceBackground.css";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function SpaceBackground() {
  useGSAP(() => {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reducedMotion) return;

    gsap.to(".space-stars-far", {
      y: -100,
      ease: "none",
      scrollTrigger: {
        trigger: document.documentElement,
        start: "top top",
        end: "max",
        scrub: 1,
      },
    });

    gsap.to(".space-stars-near", {
      y: -280,
      ease: "none",
      scrollTrigger: {
        trigger: document.documentElement,
        start: "top top",
        end: "max",
        scrub: 1,
      },
    });
  }, []);

  return (
    <div className="space-background" aria-hidden="true">
      <div className="space-nebula" />
      <div className="space-stars space-stars-far" />
      <div className="space-stars space-stars-near" />
    </div>
  );
}
