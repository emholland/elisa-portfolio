import { motion, useInView, AnimatePresence} from "framer-motion";
import { useRef, useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";


const experiences = [
  {
    role: "Software Developer Intern",
    company: "Trinity IT",
    date: "Jan 2025 – Present",
    description: `At Trinity IT, I contributed to full-stack development projects and internal AI research:

        - Led R&D on AWS AI services (e.g., Bedrock, SageMaker)  
        - Enhanced enterprise websites using React and Drupal  
        - Participated in agile ceremonies and collaborated cross-functionally`,
  },
  {
    role: "Tech Project Management Intern",
    company: "Siemens",
    date: "Jun 2024 – Dec 2024",
    description:
      `This role blended technical problem-solving with business process improvement and agile project work:

        - Shadowed a senior project manager and supported agile sprint planning, 
          team coordination, and internal reporting  
        - Automated manual Excel-based test reporting using Python, saving hours of 
          weekly effort  
        - Created SQL dashboards using Metabase  
        - Proposed and helped lead a structured internship redesign initiative, 
          selected as the top summer project`,
  },
  {
    role: "Software Developer Intern",
    company: "Trinity IT",
    date: "Jan 2024 – May 2024",
    description: `My first technical internship involved supporting backend systems and DevOps practices:

      - Docker, Kubernetes, and AWS; improved deployment pipeline reliability  
      - Practiced SCRUM and Kanban methodologies in a professional development team  
      - Conducted peer code reviews and followed secure coding best practices`,
  },
  {
    role: "Discreate Mathmatics Teaching Assistant",
    company: "Temple University",
    date: "Fall 2023",
    description:`Personally selected by faculty to support one of the department’s core theoretical courses:

        - Lectured weekly recitations and provided 1-on-1 tutoring to over 30 students
        - Helped students understand logic, proofs, induction, and combinatorics
        - Fostered a collaborative learning environment and supported student 
          confidence in a challenging subject`,
  },
];

const TimelineCard = ({ exp }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    margin: "-45% 0px -45% 0px", // Trigger when centered
  });

  return (
    <div className="relative flex items-start">
      {/* Timeline Line + Dot */}
      <div className="flex flex-col items-center mr-6">
        <div className="w-1 h-full bg-purple-300" />
      </div>

      {/* Card */}
      <motion.div
        ref={ref}
        initial={{ scale: 0.95, opacity: 0.5 }}
        animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.95, opacity: 0.5 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="bg-purple-100 bg-opacity-30 p-6 rounded-xl border border-purple-200 shadow-md w-full"
      >
        <h3 className="text-xl font-semibold text-purple-800">{exp.role}</h3>

              <AnimatePresence mode="wait">
        {isInView && (
          <motion.div
            key="details"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            <p className="text-purple-700 italic">
              {exp.company} · {exp.date}
            </p>
            <div className="mt-2 text-gray-700">
              <ReactMarkdown>{exp.description}</ReactMarkdown>
            </div>


          </motion.div>
        )}
      </AnimatePresence>

      </motion.div>
      {!isInView && (
  <div className="h-55 bg-white transition-all duration-700 ease-in-out" />
)}
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
