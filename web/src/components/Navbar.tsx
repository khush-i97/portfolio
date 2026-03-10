export default function Navbar() {
  return (
    <nav className="fixed top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
        <div className="text-xl font-bold text-purple-600">DS Portfolio</div>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-700">
          <a href="#about" className="hover:text-purple-600">About</a>
          <a href="#education" className="hover:text-purple-600">Education</a>
          <a href="#skills" className="hover:text-purple-600">Skills</a>
          <a href="#experience" className="hover:text-purple-600">Experience</a>
          <a href="#projects" className="hover:text-purple-600">Projects</a>
          <a href="#contact" className="hover:text-purple-600">Contact</a>
        </div>
      </div>
    </nav>
  );
}