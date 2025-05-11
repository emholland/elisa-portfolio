import { useState, useEffect, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import ReactMarkdown from "react-markdown";


export default function Projects() {



const projects = [
  {
    title: "AI Story Builder System",
    date: "Spring 2025",
    github: "https://github.com/Capstone-Projects-2025-Spring/project-003-story-builder-team-2",
    media: {
      type: "video",
      src: "/AI Storybuilder Demo.mp4", // Replace with your real embed link
      alt: "Video demo of AI Story Builder",
    },
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
    media: {
      type: "thumbnail",
      src: "StartupThumbnail.png",
      alt: "Presentation thumbnail for Startup Failure Predictor",
      link: "DS Final_ Startup Failure Predictor.pdf", // optional PDF download/view link
    },
    
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
    media: {
      type: "image",
      src: "MafiaImgs.png",
      alt: "Phone images of Mafia Game",
    },
    github: "https://github.com/emholland/mafia-uhh",
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
    media: {
      type: "image",
      src: "PhillyEats.png",
      alt: "Philly Eats restaurant review web app landing page",
    },
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
  const[delay, setDelay] = useState(10000); // 10 sec idle before auto mode
  const AUTO_INTERVAL = 5000; // open a new card every 5s
  




  // Record any click to reset the timer
  const toggleCard = useCallback((index) => {
    lastInteractionRef.current = Date.now();
    setAutoMode(false);
    setDelay(600000);
    setExpandedIndex(index);
  }, []);

  // Watch for idle time
  useEffect(() => {
    const checkIdle = setInterval(() => {
      if (!autoMode && Date.now() - lastInteractionRef.current > delay) {
        setAutoMode(true);
        setDelay(10000)
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
    <div

      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      {projects.map((proj, index) => {
        const isExpanded = expandedIndex === index;

        return (
          <div
            key={proj.title}
            onClick={() => toggleCard(index)}
            className={`cursor-pointer bg-purple-100 bg-opacity-30 border border-purple-200 rounded-xl p-4 transition hover:shadow-md ${
              isExpanded ? "col-span-1 sm:col-span-2 lg:col-span-3" : ""
            }`}
          >
            <h3 className="text-lg font-semibold text-purple-800">
              {proj.title}
            </h3>
            <p className="text-sm text-purple-600 italic mb-2">
              {proj.date}
            </p>

            {isExpanded && (
              <div
              >
                <div className="description mb-2 text-sm text-gray-700">
                  <ReactMarkdown>{proj.description}</ReactMarkdown>
                </div>

                {proj.media?.type === "video" && (
                    <div className="mb-4 w-full flex justify-center">
                      <video
                        controls
                        src={proj.media.src}
                        className="rounded-md w-full max-w-[400px] "
                      >
                        Your browser does not support the video tag.
                      </video>
                    </div>
                  )}

                {proj.media?.type === "image" && (
                  <div className="w-full flex justify-center mt-4 mb-4">
                    <img
                      src={proj.media.src}
                      alt={proj.media.alt || proj.title}
                      className="rounded-md border border-purple-200 max-w-full sm:max-w-[500px] object-cover"
                    />
                  </div>
                )}

                {proj.media?.type === "thumbnail" && (
                  <div className="w-full flex justify-center mt-4">
                    <a
                      href={proj.media.link || proj.media.src}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative group inline-block"
                    >
                      <img
                        src={proj.media.src}
                        alt={proj.media.alt || proj.title}
                        className="rounded-md border border-purple-200 max-w-full sm:max-w-[500px] object-cover group-hover:opacity-90 "
                      />
                      {/* Hover Overlay Icon or Text */}
                      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 ">
                        <p className="text-white font-medium text-sm sm:text-base">Click to view full presentation</p>
                      </div>
                    </a>
                  </div>
                )}



                <p className="text-sm text-purple-600">
                  <strong>Tech Stack:</strong> {proj.stack.join(", ")}
                </p>
                {proj.github && (
                <p className="mt-2 text-sm">
                  <a
                    href={proj.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-700 underline hover:text-purple-900"
                  >
                    View GitHub Repository →
                  </a>
                </p>
              )}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
