import { FaHtml5, FaCss3Alt, FaJs, FaPython, FaPhp, FaReact, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiMysql } from "react-icons/si";

export default function Skills() {
  const skills = [
    { icon: <FaHtml5 className="text-orange-600 text-4xl" />, label: "HTML" },
    { icon: <FaCss3Alt className="text-blue-600 text-4xl" />, label: "CSS" },
    { icon: <FaJs className="text-yellow-500 text-4xl" />, label: "JavaScript" },
    { icon: <FaPython className="text-blue-500 text-4xl" />, label: "Python" },
    { icon: <FaReact className="text-cyan-500 text-4xl" />, label: "React" },
    { icon: <FaNodeJs className="text-green-600 text-4xl" />, label: "Node.js" },
    { icon: <SiTailwindcss className="text-sky-400 text-4xl" />, label: "TailwindCSS" },
    { icon: <SiMysql className="text-orange-500 text-4xl" />, label: "MySQL" },
  ];

  return (
    <section className="h-screen flex flex-col items-center justify-center snap-start bg-gray-50 text-gray-900 px-6">
      <h2 className="text-3xl font-semibold mb-6">Techs That I Use</h2>
      <ul className="flex flex-wrap gap-6 justify-center">
        {skills.map((skill, index) => (
          <li
            key={index}
            className="bg-white shadow rounded px-4 py-6 flex flex-col items-center w-24 hover:shadow-lg transition"
          >
            {skill.icon}
            <span className="mt-2 text-sm font-medium">{skill.label}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
