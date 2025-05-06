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
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-purple-50 to-white text-gray-800 font-sans overflow-x-hidden">

     
     {/* Nav Bar */}
     <nav className="fixed top-4 inset-x-4 sm:left-1/2 sm:-translate-x-1/2 bg-white/90 backdrop-blur-md shadow-md rounded-full px-4 sm:px-6 py-2 z-[999] border border-purple-100 max-w-[95vw] sm:max-w-fit mx-auto">
        <ul className="flex justify-center gap-4 sm:gap-6 font-medium text-[3vw] sm:text-sm whitespace-nowrap">
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
      <main className="relative bg-white overflow-visible">
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
              "full-stack developer.",
              "creative problem solver.",
              "technical project manager.",
              "detail-oriented builder.",
              "software engineer.",
              "React and Tailwind enthusiast.",
              " web developer.",
              "UI-focused thinker.",
              "automation scripter.",
              "software engineer.",
              "bug fixer.",
              "design-minded technologist.",
              "software engineer.",
              "curious and adaptable learner.",
              "technical project collaborator.",
            ]
            ,
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
      <section id="skills" style={{ backgroundColor: 'white' }} className="py-20 border-b border-purple-100">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-purple-500 mb-4">Skills</h2>
          <SkillsCard />
        </div>
      </section>

     {/* Projects */}
    <section
      id="projects"
      className="relative py-20 border-b border-purple-100 bg-white overflow-visible"
    >
      {/* Blurred background blob */}
      <div className="absolute inset-0 z-10">
        <div className="absolute top-0 right-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-yellow-500 opacity-50 blur-[80px]" />
      </div>

      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <h2 className="text-3xl font-bold text-purple-700 mb-4">Projects</h2>
        <Projects />
      </div>
    </section>


      {/* Experience */}
      <section id="experience" className="relative py-20 border-b border-purple-100 bg-white overflow-hidden">
        {/* Blurred background blob */}
      <div className="absolute inset-0 z-10">
        <div className="absolute top-0 right-0 h-[500px] w-[500px] -translate-x-[90%] translate-y-[80%] rounded-full bg-pink-300 opacity-50 blur-[80px]" />
      </div>
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <h2 className="text-3xl font-bold text-purple-700 mb-4">Experience</h2>
          <Experiences />
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="relative py-20 overflow-visible bg-white">
        {/* Blurred background blob */}
      <div className="absolute inset-0 z-10">
        <div className="absolute top-0 right-0 h-[300px] w-[300px] -translate-x-[300%] translate-y-[10%] rounded-full bg-indigo-300 opacity-50 blur-[80px]" />
      </div>
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <h2 className="text-3xl font-bold text-purple-700 mb-4">Contact</h2>
          <Contacts />
        </div>
      </section>



{/* Footer Wrapper */}
<div className="relative overflow-visible bg-white">

  {/* Footer */}
  <footer className="text-center text-sm text-purple-400 py-6 border-t border-purple-100 relative z-10">
    © {new Date().getFullYear()} Elisa Holland. All rights reserved.
  </footer>
</div>

    </div>
  )
}

export default App

