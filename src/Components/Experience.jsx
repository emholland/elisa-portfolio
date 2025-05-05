import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

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
];

const TimelineCard = ({ exp }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    margin: "-50% 0px -50% 0px", // Only trigger when element is centered
  });

  return (
    <div className="relative flex items-start">
      {/* Timeline Line + Dot */}
      <div className="flex flex-col items-center mr-6">
        <div className="w-1 h-full bg-purple-300" />
        <div className="w-4 h-4 bg-purple-600 rounded-full absolute top-1 left-[-1.125rem]" />
      </div>

      {/* Card */}
      <motion.div
        ref={ref}
        initial={{ scale: 0.95, opacity: 0.5 }}
        animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.95, opacity: 0.5 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="bg-purple-100 bg-opacity-30 p-6 rounded-xl border border-purple-200 shadow-md w-full"
      >
        <h3 className="text-xl font-semibold text-purple-800">{exp.role}</h3>
        <p className="text-purple-700 italic">{exp.company} · {exp.date}</p>
        <p className="mt-2 text-gray-700">{exp.description}</p>
      </motion.div>
    </div>
  );
};




const Experiences = () => {
  return (
      <div className="relative space-y-12 border-l-4 border-purple-300 pl-10">
        {experiences.map((exp, index) => (
          <TimelineCard key={index} exp={exp} />
        ))}
      </div>
  );
};

export default Experiences;
