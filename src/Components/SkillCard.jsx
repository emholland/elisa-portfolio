import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  SiReact,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiVite,
  SiFigma,
  SiNodedotjs,
  SiPython,
  SiMysql,
  SiFirebase,
  SiOpenai,
  SiGithub,
  SiJest,
  SiPostman,
} from "react-icons/si";

const skills = {
  Frontend: [
    { name: "React", icon: <SiReact /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    { name: "HTML/CSS", icon: <><SiHtml5 /> <SiCss3 /></> },
    { name: "JavaScript", icon: <SiJavascript /> },
    { name: "TypeScript", icon: <SiTypescript /> },
    { name: "Vite", icon: <SiVite /> },
    { name: "Figma", icon: <SiFigma /> },
  ],
  Backend: [
    { name: "Node.js", icon: <SiNodedotjs /> },
    { name: "Python", icon: <SiPython /> },
    { name: "SQL", icon: <SiMysql /> },
    { name: "Firebase", icon: <SiFirebase /> },
    { name: "OpenAI API", icon: <SiOpenai /> },
  ],
  "Other Tools": [
    { name: "Git/GitHub", icon: <SiGithub /> },
    { name: "Jest", icon: <SiJest /> },
    { name: "Postman", icon: <SiPostman /> },
  ],
};

export default function SkillsSection() {
  const [activeTab, setActiveTab] = useState("Frontend");
  const [direction, setDirection] = useState(1); // 1 for right, -1 for left

  const handleTabClick = (category) => {
    if (category !== activeTab) {
      setDirection(Object.keys(skills).indexOf(category) > Object.keys(skills).indexOf(activeTab) ? 1 : -1);
      setActiveTab(category);
    }
  };

  return (
    <section className="px-3 sm:px-4">

      {/* Nav Tabs */}
      <div className="flex justify-center py-2 gap-4 mb-8 rounded-xl bg-purple-50 border-1 border-purple-600">
        {Object.keys(skills).map((category) => (
          <button
            key={category}
            onClick={() => handleTabClick(category)}
            className={`px-6 py-3 rounded-xl text-md font-md border transition-all
              ${
                activeTab === category
                  ? "bg-purple-700 text-white border-purple-700"
                  : "bg-white text-purple-700 border-purple-300 hover:bg-purple-200"
              }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Animated Skills Grid */}
      <div className="relative h-[250px] sm:h-[200px] overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ x: direction === 1 ? 100 : -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: direction === 1 ? -100 : 100, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="absolute w-full top-0 flex flex-wrap gap-4 justify-center"
          >
           {skills[activeTab].map(({ name, icon }) => (
              <div
                key={name}
                className="flex items-center gap-3 px-5 py-3 rounded-md bg-purple-200 text-purple-800 text-sm font-medium shadow-sm hover:bg-purple-200 transition"
              >
                <span className="text-lg">{icon}</span>
                <span>{name}</span>
              </div>
            ))}

          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}



  