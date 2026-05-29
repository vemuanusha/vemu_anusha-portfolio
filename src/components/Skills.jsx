import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "PROGRAMMING",
    skills: ["C", "C++", "JavaScript", "TypeScript", "SQL"],
  },

  {
    title: "FRONTEND",
    skills: ["HTML5", "CSS3", "Bootstrap", "React.js"],
  },

  {
    title: "BACKEND",
    skills: ["Django", "Express.js", "REST APIs"],
  },

  {
    title: "DATABASE",
    skills: ["MySQL", "PostgreSQL"],
  },

  {
    title: "TOOLS",
    skills: ["Git", "GitHub", "VS Code"],
  },

  {
    title: "OTHER",
    skills: [
      "OOPS",
      "DBMS",
      "UI/UX",
      "Debugging",
      "Testing",
      "Deployment",
    ],
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-24 px-6 bg-[#071225] text-white"
    >
      <div className="max-w-6xl mx-auto">

        {/* TOP TEXT */}
        <p className="text-blue-500 uppercase tracking-[4px] font-semibold mb-4">
          02 — Skills
        </p>

        {/* HEADING */}
        <h2 className="text-2xl md:text-5xl font-bold leading-tight mb-10">
          Tools & technologies I work with.
        </h2>

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">

          {skillCategories.map((category, index) => (
            <motion.div
              key={index}

              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}

              whileHover={{
                y: -8,
                scale: 1.02,
              }}

              transition={{
                type: "spring",
                stiffness: 300,
                delay: index * 0.1,
              }}

              className="
                bg-[#111c34]
                border border-white/10
                rounded-2xl
                p-5
                transition-all duration-300
                hover:border-blue-500/40
                hover:shadow-[0_0_30px_rgba(59,130,246,0.25)]
              "
            >

              {/* CATEGORY */}
              <h3 className="text-purple-500 text-lg font-bold mb-5">
                {category.title}
              </h3>

              {/* SKILLS */}
              <div className="flex flex-wrap gap-2">

                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="
                      px-3 py-2
                      bg-[#071225]
                      border border-white/5
                      rounded-xl
                      text-sm
                      font-medium
                      transition-all duration-300
                      hover:bg-blue-500/10
                      hover:border-blue-500/30
                      hover:text-blue-300
                    "
                  >
                    {skill}
                  </span>
                ))}

              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Skills;