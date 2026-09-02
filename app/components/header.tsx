"use client";

import { useEffect, useRef } from "react";
import Typed from "typed.js";
import Link from "next/link";

export default function Header() {
  const roleRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(roleRef.current, {
      strings: [
        "Computer Science Student",
        "Software Engineer",
        "Web Developer",
        "AI-Engineer",
      ],
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 1800,
      startDelay: 300,
      loop: true,
      showCursor: true,
      cursorChar: "_",
    });

    return () => typed.destroy();
  }, []);

  return (
    <div>
      <h1 className="text-4xl font-bold tracking-tight sm:text-5xl font-space">
        <Link href="/">Clay Micholaz</Link>
      </h1>

      <h2 className="mt-3 text-lg font-medium tracking-tight sm:text-xl font-space">
        <span ref={roleRef} />
      </h2>

      <p className="mt-4 max-w-xs leading-normal font-work">
        Building through continuous learning.
      </p>
    </div>
  );
}
