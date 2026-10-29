export default function About() {
    return (
        <section id="about" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="About me">
            <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-inherit px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest lg:sr-only font-space">About</h2>
            </div>
            <div className="font-work">
                <p className="mb-4">
                    Hi! I&apos;m Clay, and I love learning by building. I&apos;m a Computer Science student who enjoys exploring new technologies and experiences that make me a better developer.
                </p>
                <p className="mb-4">
                    I&apos;m pursuing a bachelor&apos;s degree in Computer Science at Bunda Mulia University, specializing in AI. My interests include full-stack web development, software engineering, and building practical applications with React, Next.js, TypeScript, Node.js, Python, and databases such as MySQL, MongoDB, and Supabase.
                </p>
                <p className="mb-4">
                    I previously completed a 6-month internship at{" "}
                    <a className="font-bold underline" href="https://www.profescipta.co.id/" target="_blank" rel="noopener noreferrer">
                        Profescipta Wahanatehnik
                    </a>
                    , a software development company, where I gained valuable experience in web development and software engineering.
                </p>
                <p>
                    I enjoy turning ideas into useful products, learning new technologies, and collaborating with teams. In my free time, I play guitar, spend time with friends, and stay active through sports.
                </p>
            </div>
        </section>
    )
}