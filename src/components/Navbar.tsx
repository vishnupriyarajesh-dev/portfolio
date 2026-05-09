const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm z-50 border-b border-sky-100 shadow-sm">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <span className="text-xl font-bold text-cyan-600">YourName</span>
        <ul className="flex gap-8 text-sm text-gray-600">
          <li><a href="#about" className="hover:text-cyan-600 transition-colors">About</a></li>
          <li><a href="#skills" className="hover:text-cyan-600 transition-colors">Skills</a></li>
          <li><a href="#projects" className="hover:text-cyan-600 transition-colors">Projects</a></li>
          <li><a href="#contact" className="hover:text-cyan-600 transition-colors">Contact</a></li>
        </ul>
      </div>
    </nav>
  )
}
export default Navbar