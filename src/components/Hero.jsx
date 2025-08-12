export default function Hero() {
  return (
    <section className="h-screen flex flex-col items-center justify-center snap-start bg-white text-gray-900">
      <h1 className="text-5xl font-bold">Clay Micholaz</h1>
      <p className="max-w-xl mt-4 text-gray-600 text-center">I’m a 3rd-semester Informatics student pursuing my Bachelor’s degree, passionate about becoming a full-stack developer. I’m constantly learning and improving my skills in the world of technology.</p>
      <a
        href="#projects"
        className="mt-8 px-6 py-3 bg-gray-900 text-white rounded-full hover:bg-gray-700 transition"
      >
        Check Out My Work!
      </a>
    </section>
  );
}
