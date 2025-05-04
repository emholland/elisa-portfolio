
const skills = {
    "Languages & Fundamentals": ["JavaScript", "TypeScript", "Python", "SQL", "HTML/CSS"],
    "Frameworks & Libraries": ["React", "Tailwind CSS", "Node.js", "Vite"],
    "Cloud & APIs": ["Firebase", "OpenAI API"],
    "Tools & Workflow": ["Git/GitHub", "VS Code", "Figma", "Jest", "Postman"],
};
      

  
  
  export default function SkillsCard() {
    return (
      <section className="py-12 px-4 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category}>
              <h3 className="text-lg font-semibold text-purple-700 mb-3">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {items.map((item) => (
                  <div
                    key={item}
                    className="px-3 py-1 rounded-md bg-purple-100 text-purple-800 text-sm font-medium shadow-sm hover:bg-purple-200 transition"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
  