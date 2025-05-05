import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ReactMarkdown from "react-markdown";


const projects = [
  {
    title: "AI Story Builder System",
    date: "2025 – Present",
    description: `**A collaborative storytelling platform powered by AI agents and user-driven prompts**

The **AI Story Builder** is a full-stack web application that lets users co-create interactive stories with the help of simulated AI agents. Built with **React**, **Node.js**, and the **OpenAI API**, the platform dynamically generates story chapters through multi-agent collaboration, where each AI persona contributes ideas and votes on the best continuation.

I designed the architecture to support dynamic, turn-based generation logic and built a modular voting system to enable narrative refinement over time. The system uses **Firebase** for real-time data handling and is deployed via **Docker** to ensure consistency across environments.

To guide development, I created **UML diagrams** (class, sequence, and use case) to map out interactions between users, agents, and backend services. I also led **agile sprint cycles** using **Jira**, coordinating collaboration between design, development, and QA contributors.

Beyond technical execution, I implemented analytics to evaluate agent behavior and user engagement, using those insights to continuously improve product quality. This project taught me how to balance AI experimentation with production-grade software engineering practices, resulting in a scalable and usable MVP.`,

    stack: ["React", "Firebase", "OpenAI API", "Docker", "Jira"],
  },
  {
    title: "Startup Failure Prediction Model",
    date: "Spring 2025",
    description: `**A data-driven machine learning model for identifying high-risk startups**

- Built and presented a classification model to predict startup failure using real-world data.
- Communicated findings in business terms, highlighting critical success factors such as **location**, **industry**, and **founder characteristics**.
- Achieved **99.7% accuracy** and an **AUC score of 0.99** using logistic regression.
- Engineered features, cleaned and preprocessed datasets, and optimized hyperparameters using **GridSearchCV**.
- Helped bridge the gap between technical insights and actionable business strategy.`,

    stack: ["Python", "Pandas", "Logistic Regression", "GridSearchCV"],
  },
  {
    title: "Mafia Multiplayer Game",
    date: "Fall 2024",
    description:
      "Created a real-time game using React Native and WebSocket. Led system design with UML diagrams and managed sprints with Git and Jira.",
    stack: ["React Native", "WebSocket", "UML", "Jira"],
  },
  {
    title: "Restaurant Review Website",
    date: "Spring 2024",
    description:
      "Full-stack web app with user authentication, review system, and Spring Boot + MySQL backend.",
    stack: ["React", "Spring Boot", "MySQL", "Auth"],
  },
];

export default function Projects() {
  const [index, setIndex] = useState(0);

  // Auto-advance every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % projects.length);
    }, 10000);
    return () => clearInterval(timer);
  }, []);

  const next = () => setIndex((i) => (i + 1) % projects.length);
  const prev = () => setIndex((i) => (i - 1 + projects.length) % projects.length);

  return (
    <>
    <div className="mt-20 relative w-full max-w-3xl h-[500px] mx-auto overflow-hidden">

      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="absolute w-full"
        >
          <div className="bg-purple-100 bg-opacity-30 border border-purple-200 rounded-xl p-6 min-h-[500px] h-[500px] ">
            <h3 className="text-xl font-semibold text-purple-800">{projects[index].title}</h3>
            <p className="text-purple-700 italic">{projects[index].date}</p>
            <div className="description">
              <ReactMarkdown>{projects[index].description}</ReactMarkdown>
            </div>

            <p className="mt-2 text-sm text-purple-600">
              <strong>Tech Stack:</strong> {projects[index].stack.join(", ")}
            </p>
          </div>
        </motion.div>
      </AnimatePresence>

      
    </div>

      {/* Navigation Buttons */}
      <div className="mt-15 absolute inset-y-0 left-0 flex items-center pl-2">
      <button onClick={prev} className="bg-white p-2 rounded-full shadow hover:bg-purple-100">
        ◀
      </button>
    </div>
    <div className="mt-15 absolute inset-y-0 right-0 flex items-center pr-2">
      <button onClick={next} className="bg-white p-2 rounded-full shadow hover:bg-purple-100">
        ▶
      </button>
    </div>
  </>
  );
}


  