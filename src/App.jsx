import { useState, useEffect } from 'react'
import Experiences from './Components/Experience';
import Typewriter from 'typewriter-effect';
import MorphBlob from "./Components/MorphBlob";
import Contacts from './Components/Contacts';
import SkillsCard from './Components/SkillCard';
import AboutMe from './Components/AbooutMe';
import Projects from './Components/Projects';
import AOS from 'aos';
import 'aos/dist/aos.css';






function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true, // Only animate once per element
    });
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-purple-50 to-white text-gray-800 font-sans">
     
     {/* Nav Bar */}
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-md shadow-md rounded-full px-6 py-2 z-50 border border-purple-100">
        <ul className="flex gap-6 text-sm font-medium text-gray-700">
          <li><a href="#skills" className="hover:text-purple-600">Skills</a></li>
          <li><a href="#projects" className="hover:text-purple-600">Projects</a></li>
          <li><a href="#experience" className="hover:text-purple-600">Experience</a></li>
          <li><a href="#contact" className="hover:text-purple-600">Contact</a></li>
          <li>
            <a
              href="/elisaholland_resume.pdf"
              download
              className="text-purple-600 hover:underline"
            >
              Resume
            </a>
          </li>
        </ul>
      </nav>


      {/* Landing Page / About */}
      <main className="relative bg-white overflow-hidden">
  {/* Blob Background */}
  <div className="absolute inset-0 z-0">
    <MorphBlob className="w-full h-full" />
  </div>

  {/* Hero Section */}
  <section className="relative z-10 min-h-screen flex flex-col items-center justify-center pt-28 px-6 text-center space-y-4">
    <h1 className="text-5xl font-extrabold text-purple-700">Elisa Holland</h1>
    <div className="text-lg text-gray-600">
      I'm a&nbsp;
      <span className="text-purple-500 font-semibold">
        <Typewriter
          options={{
            strings: [
              "software engineer.",
              "web designer.",
              "project manager.",
              "frontend developer.",
              "problem solver.",
              "design thinker.",
              "bug fixer.",
              "curious creator.",
              "automation scripter.",
              "cloud integrator.",
              "code artist.",
            ],
            autoStart: true,
            loop: true,
            pauseFor: 2000,
          }}
        />
      </span>
    </div>
  </section>

  {/* About Me Section */}
  <section className="relative z-10 px-6 pt-16 pb-32">
    <AboutMe />
  </section>
</main>



      {/* Skills */}
      <section id="skills" className="py-20 border-b border-purple-100">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-purple-700 mb-4">Skills</h2>
          <SkillsCard />
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-20 border-b border-purple-100">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-purple-700 mb-4">Projects</h2>
          <Projects />
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="py-20 border-b border-purple-100">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-purple-700 mb-4">Experience</h2>
          <Experiences />
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-purple-700 mb-4">Contact</h2>
          <Contacts />
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
