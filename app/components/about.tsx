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
                    Currently, I&apos;m on my fifth semester of college, pursuing a bachelor&apos;s degree in Computer Science. I have a strong interest in web development, AI, and software engineering in general, and I&apos;m always looking for new ways to improve my skills and knowledge.
                </p>
                <p className="mb-4">
                    I previously completed a 6-month internship at{" "}
                    <a className="font-medium font-bold" href="https://www.profescipta.co.id/" target="_blank" rel="noopener noreferrer">
                        Profescipta Wahanatehnik
                    </a>
                    , a software development company, where I gained valuable experience in web development and software engineering.
                </p>
                <p>
                    In my free time, I enjoy playing the guitar, hanging out with friends, staying active through sports.
                </p>
            </div>
        </section>
    )
}