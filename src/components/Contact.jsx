import { FaEnvelope, FaWhatsapp, FaInstagram } from "react-icons/fa";

export default function Contact() {
  return (
    <section className="h-screen flex flex-col items-center justify-center snap-start bg-white text-gray-900 px-6">
      <h2 className="text-3xl font-semibold mb-8">Contact Me</h2>

      <div className="flex flex-col gap-4 text-lg w-full max-w-sm">
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=claymicholaz@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 border border-gray-300 rounded-lg px-4 py-3 hover:bg-gray-100 transition shadow-sm"
        >
          <FaEnvelope className="text-2xl text-red-500" />
          claymicholaz@gmail.com
        </a>

        <a
          href="https://wa.me/6281385967782"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 border border-gray-300 rounded-lg px-4 py-3 hover:bg-gray-100 transition shadow-sm"
        >
          <FaWhatsapp className="text-2xl text-green-500" />
          +62 813-8596-7782
        </a>

        <a
          href="https://instagram.com/clay.mchlz"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 border border-gray-300 rounded-lg px-4 py-3 hover:bg-gray-100 transition shadow-sm"
        >
          <FaInstagram className="text-2xl text-pink-500" />
          @clay.mchlz
        </a>
      </div>
    </section>
  );
}