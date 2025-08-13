import { useEffect, useState } from "react";
import { FaArrowDown } from "react-icons/fa";

export default function ScrollArrow() {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    const sections = ["hero", "projects", "skills", "contact"];
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleScroll = () => {
    const container = document.getElementById("scroll-container");
    const nextSection = document.getElementById(activeSection).nextElementSibling;
    if (container && nextSection) {
      container.style.scrollSnapType = "none";
      const start = container.scrollTop;
      const end = nextSection.offsetTop;
      const duration = 500;
      let startTime = null;

      const easeInOutQuad = (t) =>
        t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;

      const animate = (time) => {
        if (!startTime) startTime = time;
        const elapsed = time - startTime;
        const progress = Math.min(elapsed / duration, 1);

        container.scrollTop = start + (end - start) * easeInOutQuad(progress);

        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          container.style.scrollSnapType = "y mandatory";
        }
      };

      requestAnimationFrame(animate);
    }
  };

  if (activeSection === "contact") return null;

  return (
    <div className="absolute bottom-4 w-full flex justify-center z-40 cursor-pointer">
    <FaArrowDown
        onClick={handleScroll}
        className="text-3xl sm:text-4xl text-gray-900 animate-bounce"
    />
    </div>

  );
}