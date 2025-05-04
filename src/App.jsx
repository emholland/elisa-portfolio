import { useState } from 'react'
import Typewriter from 'typewriter-effect';
import MorphBlob from "./Components/MorphBlob";




function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-purple-50 to-white text-gray-800 font-sans">
     
     {/* Nav Bar */}
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-md shadow-md rounded-full px-6 py-2 z-50 border border-purple-100">
        <ul className="flex gap-6 text-sm font-medium text-gray-700">
          <li><a href="#skills" className="hover:text-purple-600">Skills</a></li>
          <li><a href="#projects" className="hover:text-purple-600">Projects</a></li>
          <li><a href="#experience" className="hover:text-purple-600">Experience</a></li>
          <li><a href="#contact" className="hover:text-purple-600">Contact</a></li>
        </ul>
      </nav>


      {/* Landing Page / About */}
      <main className="relative min-h-screen bg-white overflow-hidden flex items-center justify-center pt-28 px-6">
        {/* Animated Blob Background */}
        <MorphBlob />

        {/* Hero Text */}
        <div className="text-center z-20 space-y-4">
          <h1 className="text-5xl font-extrabold text-purple-700">Elisa Holland</h1>
          <div className="text-lg text-gray-600">
            I'm a&nbsp;
            <span className="text-purple-500 font-semibold">
              <Typewriter
                options={{
                  strings: ['software engineer.', 'project manager.', 'problem solver.'],
                  autoStart: true,
                  loop: true,
                  pauseFor: 2000,
                }}
              />
            </span>
          </div>
        </div>
      </main>

      {/* Skills */}
      <section id="skills" className="py-20 border-b border-purple-100">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-purple-700 mb-4">Skills</h2>
          <p className="text-gray-600">List of technical and soft skills will go here.</p>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-20 border-b border-purple-100">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-purple-700 mb-4">Projects</h2>
          <p className="text-gray-600">Project cards or links will be displayed in this section.</p>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="py-20 border-b border-purple-100">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-purple-700 mb-4">Experience</h2>
          <p className="text-gray-600">Past roles, internships, and key responsibilities go here.</p>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-purple-700 mb-4">Contact</h2>
          <p className="text-gray-600">Contact form or email/social links will live here.</p>
        </div>
      </section>


      {/* Footer */}
      <footer className="text-center text-sm text-purple-300 py-6 border-t border-purple-100">
        © {new Date().getFullYear()} Elisa Holland. All rights reserved.
      </footer>
    </div>
  )
}

export default App
