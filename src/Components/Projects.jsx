import { useState, useEffect, useRef  } from "react";
import { motion } from "framer-motion";
import ReactMarkdown from "react-markdown";


export default function Projects() {



const projects = [
  {
    title: "AI Story Builder System",
    date: "2025 – Present",
    description: `**A collaborative storytelling platform powered by AI agents and user-driven prompts**

The **AI Story Builder** is a full-stack web application that enables users to co-create interactive stories with simulated AI agents. Built with **React**, **Node.js**, and the **OpenAI API**, the platform dynamically generates story chapters through agent collaboration, where each AI persona contributes and votes on the best continuation.

I designed the architecture to support dynamic, turn-based logic and implemented a modular voting system to allow narrative refinement over time. The system uses **Firebase** for real-time data handling and is deployed via **Docker** for cross-environment consistency.

To guide development, I created **UML diagrams** (class, sequence, and use case) to map out interactions. I also led **agile sprints** using **Jira**, coordinating collaboration between design, development, and QA.

I added analytics to evaluate agent behavior and user engagement, using insights to improve both technical quality and user experience.
`,
    stack: ["React", "Firebase", "OpenAI API", "Docker", "Jira"],
  },
  {
    title: "Startup Failure Prediction Model",
    date: "Spring 2025",
    description: `**A data-driven machine learning model for identifying high-risk startups**

- Built and presented a logistic regression classifier to predict startup failure using real-world startup data.
- Achieved **99.7% accuracy** and an **AUC score of 0.99**.
- Communicated results in business terms, identifying critical success factors like **industry**, **location**, and **team structure**.
- Cleaned and preprocessed raw data, performed **feature engineering**, and optimized models using **GridSearchCV**.
- Bridged the gap between machine learning outputs and strategic business insights in a final report and live presentation.
`,
    stack: ["Python", "Pandas", "Logistic Regression"],
  },
  {
    title: "Mafia Multiplayer Game",
    date: "Fall 2024",
    description:
      `**A real-time multiplayer strategy game implemented with React Native and WebSocket**

This project is a mobile-friendly, turn-based Mafia game that allows multiple players to join and interact in real time. Built with **React Native**, the app uses **WebSocket** connections to synchronize game state, chat, voting rounds, and role actions across all users.

I led architectural planning by creating detailed **UML diagrams** (class and sequence) to model gameplay logic, network communication, and game state transitions. The server logic included role assignment (e.g., Mafia, Villager), day/night cycle handling, and a real-time voting system, ensuring a smooth interactive experience.

Team collaboration was managed through **Jira**, with version control using **GitHub Projects**. I contributed to the system design, backend socket logic, and mobile interface implementation while coordinating across feature branches.

The final product simulates the Mafia party game in a digital environment, providing an engaging, stateful multiplayer experience with minimal latency.
`,
    stack: ["React Native", "WebSocket", "Jira"],
  },
  {
    title: "Restaurant Review Website",
    date: "Spring 2024",
    description:
      `**A full-stack restaurant review platform with user authentication and dynamic content**

This project is a fully functional review platform where users can create accounts, log in, and leave feedback on local restaurants. Built with a **React** frontend and a **Spring Boot** backend, the app features **role-based authentication**, **RESTful APIs**, and **MySQL** for persistent data storage.

I implemented user registration and login with secure password handling, and connected the front and backend via API routes for review creation, editing, and retrieval. The UI includes real-time updates and conditional rendering based on user roles (e.g., admin vs regular user).

Deployed on **Tomcat**, the site demonstrates core principles of **MVC architecture**, database relationships, and full-stack integration.
`,
    stack: ["React", "Spring Boot", "MySQL", "REST APIs", "Tomcat"],
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
