import { FaLinkedin, FaGithub, FaInstagram, FaWhatsapp, FaEnvelope } from "react-icons/fa";

export default function Contacts() {
    return (
        <div>
            <p className="mt-8 max-w-xs text-sm leading-normal font-work">
                For collaboration and software engineering opportunities, <a className="font-bold underline" href="mailto:claymicholaz@gmail.com">email me</a>.
            </p>
            <ul className="ml-1 mt-5 flex items-center" aria-label="Social media">
            <li className="mr-5 shrink-0 text-xs">
                <a className="block rounded-sm opacity-60 transition-all hover:scale-110 hover:opacity-100" href="https://github.com/ClayMicholaz" target="_blank" rel="noopener noreferrer" aria-label="GitHub (opens in a new tab)">
                    <FaGithub className="h-6 w-6" />
                </a>
            </li>
            <li className="mr-5 shrink-0 text-xs">
                <a className="block rounded-sm opacity-60 transition-all hover:scale-110 hover:opacity-100" href="https://www.linkedin.com/in/clay-micholaz-462a7934b/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn (opens in a new tab)">
                    <FaLinkedin className="h-6 w-6" />
                </a>
            </li>
            <li className="mr-5 shrink-0 text-xs">
                <a className="block rounded-sm opacity-60 transition-all hover:scale-110 hover:opacity-100" href="https://instagram.com/clay.mchlz" target="_blank" rel="noopener noreferrer" aria-label="Instagram (opens in a new tab)">
                    <FaInstagram className="h-6 w-6" />
                </a>
            </li>
            <li className="mr-5 shrink-0 text-xs">
                <a className="block rounded-sm opacity-60 transition-all hover:scale-110 hover:opacity-100" href="https://wa.me/6281385967782?text=Hi%20Clay,%20I%20came%20across%20your%20portfolio%20and%20would%20like%20to%20connect." target="_blank" rel="noopener noreferrer" aria-label="WhatsApp (opens in a new tab)">
                    <FaWhatsapp className="h-6 w-6" />
                </a>
            </li>
            <li className="mr-5 shrink-0 text-xs">
                <a className="block rounded-sm opacity-60 transition-all hover:scale-110 hover:opacity-100" href="mailto:claymicholaz@gmail.com" aria-label="Email">
                    <FaEnvelope className="h-6 w-6" />
                </a>
            </li>
            </ul>
        </div>
    )
}