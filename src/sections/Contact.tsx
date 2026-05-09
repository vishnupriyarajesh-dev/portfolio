const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 bg-sky-50">
      <div className="max-w-2xl mx-auto text-center">
        
        <p className="text-cyan-600 uppercase tracking-widest text-sm mb-3">Get In Touch</p>
        <h2 className="text-4xl font-bold text-gray-900 mb-6">Contact Me</h2>
        <p className="text-cyan-600 text-lg mb-12">
          I'm currently open to new opportunities. Whether you have a question,
          a project idea, or just want to say hi — my inbox is always open!
        </p>

        <a href="mailto:vishnupriyarajesh7b@gmail.com"
          className="inline-block bg-cyan-600 hover:bg-cyan-700 text-white px-10 py-4 rounded-lg font-medium text-lg transition-colors mb-16">
          Say Hello
        </a>

        <div className="flex justify-center gap-8">
          <a href="https://github.com/vishnupriyarajesh-dev" target="_blank" rel="noopener noreferrer"
            className="text-gray-600 hover:text-indigo-400 transition-colors font-medium">
            GitHub
          </a>
          <a href="https://linkedin.com/in/vishnupriya-rajesh" target="_blank" rel="noopener noreferrer"
            className="text-gray-600 hover:text-indigo-400 transition-colors font-medium">
            LinkedIn
          </a>
          <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer"
            className="text-gray-600 hover:text-indigo-400 transition-colors font-medium">
            Twitter
          </a>

        </div>
      </div>
    </section>
  )
}

export default Contact