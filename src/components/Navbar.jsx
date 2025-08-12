import { useEffect, useState } from "react";

export default function Navbar() {
  const sections = [
    { id: "hero", label: "Home" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "contact", label: "Contact" },
  ];

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

    sections.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Custom animation */}
      <style>
        {`
        @keyframes droplet {
          0% { transform: scale(1); }
          40% { transform: scale(1.3, 0.7); }
          70% { transform: scale(0.85, 1.15); }
          100% { transform: scale(1); }
        }
        .animate-droplet {
          animation: droplet 0.4s ease-out;
        }
        `}
      </style>

      <nav className="fixed right-10 top-1/2 -translate-y-1/2 flex flex-col gap-6 z-50">
        {sections.map((section) => (
          <a
            key={section.id}
            href={`#${section.id}`}
            className="group relative flex items-center"
          >
            {/* Tooltip */}
            <span className="absolute right-full mr-4 px-3 py-1 rounded bg-gray-900 text-white text-sm opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200">
              {section.label}
            </span>

            {/* Dot */}
            <span
              className={`w-5 h-5 rounded-full transition-colors duration-200 ${
                activeSection === section.id
                  ? "bg-gray-900 animate-droplet"
                  : "bg-gray-400 group-hover:bg-gray-900"
              }`}
            />
          </a>
        ))}
      </nav>
    </>
  );
}
