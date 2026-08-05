export default function Navigation() {
    return (
        <nav className="nav hidden lg:block" aria-label="In-page jump links">
            <ul className="mt-16 w-max">
                <li>
                    <a className="group flex items-center py-3" href="#about">
                        <span className="nav-indicator mr-4 h-px w-8 bg-current opacity-40 transition-all group-hover:w-16 group-hover:opacity-100"></span>
                        <span className="text-xs font-bold uppercase tracking-widest opacity-60 group-hover:opacity-100 font-space">About</span>
                    </a>
                </li>
                <li>
                    <a className="group flex items-center py-3" href="#journey">
                        <span className="nav-indicator mr-4 h-px w-8 bg-current opacity-40 transition-all group-hover:w-16 group-hover:opacity-100"></span>
                        <span className="text-xs font-bold uppercase tracking-widest opacity-60 group-hover:opacity-100 font-space">Journey</span>
                    </a>
                </li>
                <li>
                    <a className="group flex items-center py-3" href="#projects">
                        <span className="nav-indicator mr-4 h-px w-8 bg-current opacity-40 transition-all group-hover:w-16 group-hover:opacity-100"></span>
                        <span className="text-xs font-bold uppercase tracking-widest opacity-60 group-hover:opacity-100 font-space">Projects</span>
                    </a>
                </li>
            </ul>
        </nav>
    );
}