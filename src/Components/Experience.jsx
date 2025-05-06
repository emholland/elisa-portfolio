import { motion, useInView, AnimatePresence} from "framer-motion";
import { useRef, useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";


const experiences = [
  {
    role: "Software Developer Intern",
    company: "Trinity IT",
    date: "Jan 2025 – April 2025",
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

- Shadowed a senior project manager and supported agile sprint planning, team coordination, and internal reporting  
- Automated manual Excel-based reporting using Python, saving hours of weekly effort  
- Automted website testing using python to accelerate move to aws platform 
- Created SQL dashboards and reports for top clients using Metabase  
- Proposed and helped lead a structured internship redesign initiative, selected as the top summer project`,
  },
  {
    role: "Software Developer Intern",
    company: "Trinity IT",
    date: "Jan 2024 – May 2024",
    description: `My first technical internship involved supporting backend systems and DevOps practices:

- Docker, Kubernetes, and AWS training and experience; improved deployment pipeline reliability  
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
- Fostered a collaborative learning environment and supported student confidence in a challenging subject`,
  },
  {
    role: "After School Coding Insurtuctor",
    company: "",
    date: "Fall 2023",
    description: `Taught coding and STEM lessons to K–8 students at local schools:

- Developed and delivered engaging, age-appropriate lessons in Scratch and basic programming concepts
- Adapted teaching strategies to meet a range of learning styles and classroom environments
- Inspired early interest in STEM through hands-on activities, games, and collaborative projects`},
];

const TimelineCard = ({ exp }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    margin: "-45% 0px -45% 0px",
  });

  return (
    <div className="relative flex flex-col sm:flex-row items-start sm:items-center gap-4">
      {/* Timeline Line */}
      <div className="hidden sm:flex flex-col items-center mr-6">
        <div className="w-1 h-full bg-purple-300" />
      </div>

      {/* Card */}
      <motion.div
        ref={ref}
        initial={{ scale: 0.95, opacity: 0.5 }}
        animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.95, opacity: 0.5 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="mb-20 min-w-0 bg-purple-100 bg-opacity-30 p-4 sm:p-6 rounded-xl border border-purple-200 shadow-md w-full max-w-full"
      >
        <h3 className="text-lg sm:text-xl font-semibold text-purple-800">{exp.role}</h3>

        <AnimatePresence mode="wait">
          {isInView && (
            <motion.div
              key="details"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 1, ease: "easeInOut" }}
            >
              <p className="text-sm sm:text-base text-purple-700 italic mt-1">
                {exp.company} · {exp.date}
              </p>
              <div className="mt-3 text-sm sm:text-base text-gray-700 description min-w-0 break-words whitespace-normal [&_ul]:list-disc [&_ul]:pl-5 [&_li]:font-medium [&_li]:text-purple-800 [&_li]:break-words [&_li]:whitespace-normal">
                <ReactMarkdown>{exp.description}</ReactMarkdown>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

const Experiences = () => {
  return (
    <div className="relative space-y-10 sm:space-y-12 sm:border-l-4 sm:pl-10 border-purple-300 px-4">
      {experiences.map((exp, index) => (
        <TimelineCard key={index} exp={exp} />
      ))}
    </div>
  );
};


export default Experiences;
