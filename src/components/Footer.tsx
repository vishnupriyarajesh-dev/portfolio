const Footer = () => {
  return (
    <footer className="py-8 px-6 border-t border-gray-800 text-center">
      <p className="text-gray-500 text-sm">
        © {new Date().getFullYear()} Your Name. Built with React & Tailwind CSS.
      </p>
    </footer>
  )
}

export default Footer