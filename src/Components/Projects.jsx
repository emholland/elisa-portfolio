const projects = [
    {
      title: "AI Story Builder System",
      date: "2025 – Present",
      description:
        "Developed a full-stack AI-powered storytelling app using React, Firebase, and OpenAI APIs. Engineered multi-agent generation, voting logic, and coordinated agile sprints through Jira and Docker.",
      stack: ["React", "Firebase", "OpenAI API", "Docker", "Jira"],
    },
    {
      title: "Startup Failure Prediction Model",
      date: "Spring 2025",
      description:
        "Built and presented a logistic regression classifier to predict startup failure with 99.7% accuracy. Focused on real-world data, feature engineering, and business-factor interpretation.",
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
  
  const Projects = () => {
    return (
        <div className="space-y-8">
          {projects.map((proj, index) => (
            <div key={index} className="bg-purple-100 bg-opacity-30 p-6 rounded-xl border border-purple-200">
              <h3 className="text-xl font-semibold text-purple-800">{proj.title}</h3>
              <p className="text-purple-700 italic">{proj.date}</p>
              <p className="mt-2 text-gray-700">{proj.description}</p>
              <p className="mt-2 text-sm text-purple-600">
                <strong>Tech Stack:</strong> {proj.stack.join(", ")}
              </p>
            </div>
          ))}
        </div>
    );
  };
  
  export default Projects;
  