import { GoArrowUpRight } from "react-icons/go";

export default function Journey() {
    return (
        <section id="journey" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="Work experience">
            <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-inherit px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest lg:sr-only font-space">Journey</h2>
            </div>
            <div>
                <ol className="group/list">
                    <li className="mb-12">
                        <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4">
                            <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide opacity-60 sm:col-span-2 font-space" aria-label="August 2024 to Present">
                                Aug 2024 — Present
                            </header>
                            <div className="z-10 sm:col-span-6">
                                <h3 className="font-medium leading-snug font-space">
                                    Computer Science Student · Bunda Mulia University
                                </h3>
                                <p className="mt-2 text-sm leading-normal font-work">
                                    Currently pursuing a degree in Computer Science, specializing in AI.
                                </p>
                            </div>
                        </div>
                    </li>
                    <li className="mb-12">
                        <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4">
                            <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide opacity-60 sm:col-span-2 font-space" aria-label="March 2026 to Present">
                                Mar 2026 — Present
                            </header>
                            <div className="z-10 sm:col-span-6">
                                <h3 className="font-medium leading-snug font-space">
                                    Team Member · PIDI - DIGDAYA x Hackathon 2026
                                </h3>
                                <p className="mt-2 text-sm leading-normal font-work">
                                    Participating in a hackathon, collaborating with a team to develop{" "}
                                    <a className="font-bold" href="https://revdadas.vercel.app/" target="_blank" rel="noopener noreferrer">
                                        revdadas
                                    </a>
                                    , an AI-driven revenue forecasting & fraud detection system.
                                </p>
                            </div>
                        </div>
                    </li>
                    <li className="mb-12">
                        <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4">
                            <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide opacity-60 sm:col-span-2 font-space" aria-label="October 2025 to April 2026">
                                Oct 2025 — Apr 2026
                            </header>
                            <div className="z-10 sm:col-span-6">
                                <h3 className="font-medium leading-snug font-space">
                                    Developer Intern · Profescipta Wahanatehnik
                                </h3>
                                <p className="mt-2 text-sm leading-normal font-work">
                                    Interning at a tech company, gaining hands-on experience in software development and team collaboration.
                                </p>
                            </div>
                        </div>
                    </li>
                    <li className="mb-12">
                        <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4">
                            <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide opacity-60 sm:col-span-2 font-space" aria-label="March 2025 to July 2025">
                                Mar 2025 — Jul 2025
                            </header>
                            <div className="z-10 sm:col-span-6">
                                <h3 className="font-medium leading-snug font-space">
                                    Student · Full-Stack Development Bootcamp
                                </h3>
                                <p className="mt-2 text-sm leading-normal font-work">
                                    Participating in a intensive bootcamp from harisenin.com to enhance my full-stack development skills.
                                </p>
                            </div>
                        </div>
                    </li>
                </ol>
                <div className="mt-12">
                    <a className="inline-flex items-baseline font-medium leading-tight font-semibold group/link text-base font-space" href="/Clay_Micholaz_Fu_CV.pdf" target="_blank" rel="noopener noreferrer" aria-label="View Full CV (opens in a new tab)">
                        <span>
                            View Full{" "}
                            <span className="inline-block">
                                CV
                                <GoArrowUpRight className="inline-block ml-1 h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1" aria-hidden="true" />
                            </span>
                        </span>
                    </a>
                </div>
            </div>
        </section>
    )
}