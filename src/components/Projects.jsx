import { FaGithub } from "react-icons/fa"; // if using react-icons

export default function Projects() {
  return (
    <section
      id="projects"
      className="h-screen flex flex-col items-center justify-center snap-start bg-white px-6"
    >
      <h2 className="text-3xl font-semibold mb-6">Some of the Projects I Made</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl">
        <a href="https://github.com/ClayMicholaz/rental_mobil">
          <div className="bg-gray-100 p-4 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold">car rental website</h3>
            <p className="text-gray-600 mt-2">this is a project that i made with my friend in a group of two for a final project on the second semester of college</p>
          </div>
        </a>
        <a href="https://github.com/ClayMicholaz/Advanced-HariSenin">
          <div className="bg-gray-100 p-4 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold">vidio belajar</h3>
            <p className="text-gray-600 mt-2">i made this project by my self when i enrolled on a full stack development bootcamp as a step by step project</p>
          </div>
        </a>
        <div className="bg-gray-100 p-4 rounded-lg shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold">third project</h3>
          <p className="text-gray-600 mt-2">coming soon</p>
        </div>
      </div>

      <a
        href="https://github.com/ClayMicholaz"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 inline-flex items-center gap-2 px-5 py-2 border border-gray-900 rounded-full text-gray-900 hover:bg-gray-900 hover:text-white transition"
      >
        <FaGithub className="text-2xl" />
        View My GitHub
      </a>
    </section>
  );
}
