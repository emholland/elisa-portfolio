import { useState, useEffect, useRef  } from "react";
import { motion } from "framer-motion";
import ReactMarkdown from "react-markdown";


export default function Projects() {



const projects = [
  {
    title: "AI Story Builder System",
    date: "2025 – Present",
    description: `**A collaborative storytelling platform powered by AI agents and user-driven prompts**

The **AI Story Builder** is a full-stack web application...`,
    stack: ["React", "Firebase", "OpenAI API", "Docker", "Jira"],
  },
  {
    title: "Startup Failure Prediction Model",
    date: "Spring 2025",
    description: `**A data-driven machine learning model for identifying high-risk startups**

- 99.7% accuracy (AUC: 0.99)
- Feature engineering + GridSearchCV`,
    stack: ["Python", "Pandas", "Logistic Regression"],
  },
  {
    title: "Mafia Multiplayer Game",
    date: "Fall 2024",
    description:
      "Created a real-time game using React Native and WebSocket...",
    stack: ["React Native", "WebSocket", "Jira"],
  },
  {
    title: "Restaurant Review Website",
    date: "Spring 2024",
    description:
      "Full-stack site with authentication, reviews, and Spring Boot + MySQL backend.",
    stack: ["React", "Spring Boot", "MySQL"],
  },
];

  const [expandedIndex, setExpandedIndex] = useState(null);
  const [autoMode, setAutoMode] = useState(true);
  const [autoStep, setAutoStep] = useState(0);
  const lastInteractionRef = useRef(Date.now());
  const AUTO_DELAY = 10000; // 6 sec idle before auto mode
  const AUTO_INTERVAL = 5000; // open a new card every 2s
  




  // Record any click to reset the timer
  const toggleCard = (index) => {
    lastInteractionRef.current = Date.now();
    setAutoMode(false);
    setExpandedIndex((prev) => (prev === index ? null : index));
  };

  // Watch for idle time
  useEffect(() => {
    const checkIdle = setInterval(() => {
      if (!autoMode && Date.now() - lastInteractionRef.current > AUTO_DELAY) {
        setAutoMode(true);
        setAutoStep(0);
      }
    }, 1000);
    return () => clearInterval(checkIdle);
  }, [autoMode]);

  // When in auto mode, expand cards one by one
  useEffect(() => {
    if (!autoMode) return;
    if (autoStep >= projects.length) return;

    const timer = setTimeout(() => {
      setExpandedIndex(autoStep);
      setAutoStep((prev) => prev + 1);
    }, AUTO_INTERVAL);

    return () => clearTimeout(timer);
  }, [autoStep, autoMode, projects.length]);

  return (
    <motion.div
      layout
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      {projects.map((proj, index) => {
        const isExpanded = expandedIndex === index;

        return (
          <motion.div
            key={proj.title}
            layout
            onClick={() => toggleCard(index)}
            transition={{
              layout: { type: "spring", stiffness: 80, damping: 40 },
            }}
            className={`cursor-pointer bg-purple-100 bg-opacity-30 border border-purple-200 rounded-xl p-4 transition hover:shadow-md ${
              isExpanded ? "col-span-1 sm:col-span-2 lg:col-span-3" : ""
            }`}
          >
            <motion.h3 layout className="text-lg font-semibold text-purple-800">
              {proj.title}
            </motion.h3>
            <motion.p layout className="text-sm text-purple-600 italic mb-2">
              {proj.date}
            </motion.p>

            {isExpanded && (
              <motion.div
                layout
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <div className="description mb-2 text-sm text-gray-700">
                  <ReactMarkdown>{proj.description}</ReactMarkdown>
                </div>
                <p className="text-sm text-purple-600">
                  <strong>Tech Stack:</strong> {proj.stack.join(", ")}
                </p>
              </motion.div>
            )}
          </motion.div>
        );
      })}
    </motion.div>
  );
}
