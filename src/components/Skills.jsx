import { FaHtml5, FaCss3Alt, FaJs, FaPython, FaPhp, FaReact, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiMysql } from "react-icons/si";

export default function Skills() {
  const skills = [
    { icon: <FaHtml5 className="text-orange-600 text-4xl" />, label: "HTML", link: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
    { icon: <FaCss3Alt className="text-blue-600 text-4xl" />, label: "CSS", link: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
    { icon: <FaJs className="text-yellow-500 text-4xl" />, label: "JavaScript", link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
    { icon: <FaPython className="text-blue-500 text-4xl" />, label: "Python", link: "https://www.python.org/doc/" },
    { icon: <FaReact className="text-cyan-500 text-4xl" />, label: "React", link: "https://reactjs.org/docs/getting-started.html" },
    { icon: <FaNodeJs className="text-green-600 text-4xl" />, label: "Node.js", link: "https://nodejs.org/en/docs/" },
    { icon: <SiTailwindcss className="text-sky-400 text-4xl" />, label: "TailwindCSS", link: "https://tailwindcss.com/docs" },
    { icon: <SiMysql className="text-orange-500 text-4xl" />, label: "MySQL", link: "https://dev.mysql.com/doc/" },
  ];

  return (
    <section className="h-screen flex flex-col items-center justify-center snap-start bg-gray-50 text-gray-900 px-6">
      <h2 className="text-3xl font-semibold mb-6">Techs That I Use</h2>
      <ul className="flex flex-wrap gap-6 justify-center">
        {skills.map((skill, index) => (
          <li key={index} className="w-24">
            <a
              href={skill.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white shadow rounded px-4 py-6 flex flex-col items-center hover:shadow-lg transition text-center"
            >
              {skill.icon}
              <span className="mt-2 text-sm font-medium">{skill.label}</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
