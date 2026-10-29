"use client";

import { useEffect, useState } from "react";

const sections = [
    { id: "about", label: "About" },
    { id: "journey", label: "Journey" },
    { id: "projects", label: "Projects" },
];

export default function Navigation() {
    const [activeSection, setActiveSection] = useState("about");

    useEffect(() => {
        const sectionElements = sections
            .map(({ id }) => document.getElementById(id))
            .filter((section): section is HTMLElement => section !== null);

        const observer = new IntersectionObserver(
            (entries) => {
                const visibleSection = entries
                    .filter((entry) => entry.isIntersecting)
                    .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

                if (visibleSection) {
                    setActiveSection(visibleSection.target.id);
                }
            },
            { rootMargin: "-20% 0px -55% 0px", threshold: [0, 0.25, 0.5, 1] },
        );

        sectionElements.forEach((section) => observer.observe(section));

        return () => observer.disconnect();
    }, []);

    return (
        <nav className="nav hidden lg:block" aria-label="In-page jump links">
            <ul className="mt-16 w-max">
                {sections.map(({ id, label }) => {
                    const isActive = activeSection === id;

                    return (
                        <li key={id}>
                            <a
                                className="group flex items-center py-3 focus-visible:outline-offset-8"
                                href={`#${id}`}
                                aria-current={isActive ? "location" : undefined}
                            >
                                <span className={`nav-indicator mr-4 h-px bg-current transition-all duration-300 ${isActive ? "w-16 opacity-100" : "w-8 opacity-40 group-hover:w-16 group-hover:opacity-100"}`}></span>
                                <span className={`font-space text-xs font-bold uppercase tracking-widest transition-opacity ${isActive ? "opacity-100" : "opacity-60 group-hover:opacity-100"}`}>{label}</span>
                            </a>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
}