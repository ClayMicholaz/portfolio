import Contacts from "./components/contacts";
import About from "./components/about";
import Header from "./components/header";
import Navigation from "./components/navigation";
import Journey from "./components/journey";
import Projects from "./components/projects";

export default function Home() {
  return (
    <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-16 lg:py-0">
      <div className="lg:flex lg:justify-between lg:gap-4">
        {/* Left side: sticky header */}
        <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[48%] lg:flex-col lg:justify-between lg:py-24">
          <div>
            <Header />
            <Navigation />
          </div>
          <Contacts />
        </header>

        {/* Right side: scrollable content */}
        <main className="pt-24 lg:w-[52%] lg:py-24">
          <About />
          <Journey />
          <Projects />
        </main>
      </div>
    </div>
  );
}
