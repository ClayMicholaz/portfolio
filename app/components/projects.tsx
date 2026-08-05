import { GoArrowUpRight } from "react-icons/go"
import Image from "next/image"

export default function Projects() {
    return (
        <section id="projects" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="Selected projects">
            <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-inherit px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest lg:sr-only font-space">Projects</h2>
            </div>
            <div>
                <ul className="group/list">
                    <li className="mb-12">
                        <a href="https://getstorylens.vercel.app/" target="_blank" rel="noopener noreferrer">
                            <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:opacity-100! lg:group-hover/list:opacity-50">
                                <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-gray-200/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                                <div className="z-10 sm:order-2 sm:col-span-6">
                                    <h3>
                                        <span className="font-medium leading-tight font-space text-base">
                                            Storylens
                                        </span>
                                    </h3>
                                    <p className="mt-2 text-sm leading-normal font-work">
                                        A web application that lets the user get news from various sources, with a focus on providing information without distractions.
                                    </p>
                                </div>
                                <Image
                                    alt="Storylens Project"
                                    loading="lazy"
                                    width={200}
                                    height={48}
                                    className="aspect-video object-cover rounded border-2 border-current/10 transition group-hover:border-current/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
                                    src="/storylens.webp"
                                />
                            </div>
                        </a>
                    </li>
                    <li className="mb-12">
                        <a href="https://tictactoe-minimax-one.vercel.app/" target="_blank" rel="noopener noreferrer">
                            <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:opacity-100! lg:group-hover/list:opacity-50">
                                <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-gray-200/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                                <div className="z-10 sm:order-2 sm:col-span-6">
                                    <h3>
                                        <span className="font-medium leading-tight font-space text-base">
                                            Tic Tac Toe
                                        </span>
                                    </h3>
                                    <p className="mt-2 text-sm leading-normal font-work">
                                        A Tic Tac Toe game that you cannot beat, you play against an AI opponent that uses the minimax algorithm with alpha beta pruning.
                                    </p>
                                </div>
                                <Image
                                    alt="Tic Tac Toe Project"
                                    loading="lazy"
                                    width={200}
                                    height={48}
                                    className="aspect-video object-cover rounded border-2 border-current/10 transition group-hover:border-current/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
                                    src="/tictactoe.webp"
                                />
                            </div>
                        </a>
                    </li>
                    <li className="mb-12">
                        <a href="https://umkm-mapper.vercel.app/" target="_blank" rel="noopener noreferrer">
                            <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:opacity-100! lg:group-hover/list:opacity-50">
                                <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-gray-200/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                                <div className="z-10 sm:order-2 sm:col-span-6">
                                    <h3>
                                        <span className="font-medium leading-tight font-space text-base">
                                            UMKM Mapper
                                        </span>
                                    </h3>
                                    <p className="mt-2 text-sm leading-normal font-work">
                                        A web application designed to map UMKMs (Small and Medium Enterprises) for various purposes such as identification and analysis.
                                    </p>
                                </div>
                                <Image
                                    alt="UMKM Mapper Project"
                                    loading="lazy"
                                    width={200}
                                    height={48}
                                    className="aspect-video object-cover rounded border-2 border-current/10 transition group-hover:border-current/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
                                    src="/umkm-mapper.webp"
                                />
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
            <div className="mt-12">
                <a className="inline-flex items-baseline font-medium leading-tight group/link text-base font-space" href="https://github.com/ClayMicholaz?tab=repositories" target="_blank" rel="noopener noreferrer" aria-label="View Full CV (opens in a new tab)">
                    <span>
                        Check Out My Other Projects
                        <GoArrowUpRight className="inline-block ml-1 h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1" aria-hidden="true" />
                    </span>
                </a>
            </div>
        </section>
    )
}