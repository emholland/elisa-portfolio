const experiences = [
    {
      role: "Software Developer Intern",
      company: "Trinity IT",
      date: "Jan 2025 – Present",
      description:
        "Leading research on AWS AI services. Enhanced React/Drupal platforms, fixed front-end bugs, and supported production systems.",
    },
    {
      role: "Tech Project Management Intern",
      company: "Siemens",
      date: "Jun 2024 – Dec 2024",
      description:
        "Automated reporting with Python, built SQL dashboards in Metabase, and led a top-rated internship program redesign.",
    },
    {
      role: "Software Developer Intern",
      company: "Trinity IT",
      date: "Jan 2024 – May 2024",
      description:
        "Contributed to DevOps using Docker/Kubernetes/AWS. Wrote backend SQL and practiced secure coding and agile methods.",
    },
    {
      role: "Teaching Assistant",
      company: "Temple University",
      date: "Fall 2023",
      description:
        "Invited to mentor and teach Discrete Math to over 30 students through lectures and 1-on-1 support.",
    },
    {
      role: "After School Coding Teacher",
      company: "K–8 Program",
      date: "Fall 2023",
      description:
        "Taught introductory programming and problem-solving to elementary and middle school students.",
    },
  ];
  
  const Experience = () => {
    return (
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-purple-100 bg-opacity-30 p-6 rounded-xl border border-purple-200">
              <h3 className="text-xl font-semibold text-purple-800">{exp.role}</h3>
              <p className="text-purple-700 italic">{exp.company} · {exp.date}</p>
              <p className="mt-2 text-gray-700">{exp.description}</p>
            </div>
          ))}
        </div>

    );
  };
  
  export default Experience;
  