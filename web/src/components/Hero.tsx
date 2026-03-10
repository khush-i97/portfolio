export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center text-center overflow-hidden">
      
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-500 via-purple-600 to-blue-500" />

      {/* Pink glow blob */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-pink-500 rounded-full blur-[150px] opacity-40" />

      {/* Blue glow blob */}
      <div className="absolute bottom-0 -right-40 w-[500px] h-[500px] bg-blue-500 rounded-full blur-[150px] opacity-40" />

      {/* Content */}
      <div className="relative z-10 px-6">
        <h1 className="text-5xl md:text-7xl font-extrabold text-white">
          Data Engineer
        </h1>

        <p className="mt-6 text-xl md:text-2xl text-white">
          Turning Data into{" "}
          <span className="text-yellow-300 font-semibold">Insights</span>
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-6 justify-center">
          <a
            href="#contact"
            className="px-8 py-3 rounded-full border border-white text-white font-medium hover:bg-white hover:text-purple-700 transition"
          >
            Get in Touch
          </a>

          <a
            href="#projects"
            className="px-8 py-3 rounded-full border border-white text-white font-medium hover:bg-white hover:text-purple-700 transition"
          >
            View Projects
          </a>
        </div>

        <div className="mt-10 flex justify-center gap-6 text-white text-2xl">
          <a href="#" aria-label="GitHub" className="hover:opacity-80">🐙</a>
          <a href="#" aria-label="LinkedIn" className="hover:opacity-80">in</a>
          <a href="#" aria-label="Email" className="hover:opacity-80">✉️</a>
        </div>
      </div>
    </section>
  );
}