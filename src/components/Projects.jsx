import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    id: "01",
    title: "Smart Task Manager",

    description:
      "Task management web application with authentication, task tracking, dark mode, and productivity tools.",

    tech: ["React", "Django", "PostgreSQL"],

    github: "https://github.com/vemuanusha/Smart-Task-Manager",

    live: "",
  },

  {
    id: "02",
    title: "Food Ordering Website",

    description:
      "Responsive online food ordering platform with menu browsing and cart management.",

    tech: ["HTML", "CSS", "JavaScript"],

    github: "https://github.com/vemuanusha/Food_Ordering",

    live: "",
  },

  {
    id: "03",
    title: "Student Management System",

    description:
      "CRUD-based student management system using OOPS concepts and database handling.",

    tech: ["C++", "OOPS", "MySQL"],

    github: "https://github.com/vemuanusha/Student-Management-System",

    live: "",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-24 px-6 bg-[#071225] text-white"
    >
      <div className="max-w-6xl mx-auto">

        {/* TOP TEXT */}
        <p className="text-blue-500 uppercase tracking-[4px] font-semibold mb-4">
          04 — Projects
        </p>

        {/* HEADING */}
        <h2 className="text-2xl md:text-5xl font-bold mb-10">
          Selected work.
        </h2>

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">

          {projects.map((project, index) => (
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

              {/* TOP */}
              <div className="flex justify-between items-start mb-6">

                {/* NUMBER */}
                <div className="
                  w-12 h-12
                  rounded-xl
                  bg-gradient-to-r
                  from-blue-500
                  to-purple-500
                  flex items-center justify-center
                  text-lg font-bold
                ">
                  {project.id}
                </div>

                {/* LINKS */}
                <div className="flex gap-3">

                  {/* GITHUB */}
                  <a
                    href={project.github}
                    target="_blank"
                    className="
                      text-gray-400
                      hover:text-white
                      transition
                    "
                  >
                    <Github size={20} />
                  </a>

                  {/* LIVE */}
                  <a
                    href={project.live}
                    target="_blank"
                    className="
                      text-gray-400
                      hover:text-white
                      transition
                    "
                  >
                    <ExternalLink size={20} />
                  </a>

                </div>
              </div>

              {/* TITLE */}
              <h3 className="text-xl font-bold mb-4">
                {project.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="text-gray-400 text-sm leading-7 mb-6">
                {project.description}
              </p>

              {/* TECH */}
              <div className="flex flex-wrap gap-2">

                {project.tech.map((item, i) => (
                  <span
                    key={i}
                    className="
                      px-3 py-1.5
                      rounded-lg
                      bg-[#071225]
                      border border-white/5
                      text-xs
                      uppercase
                      tracking-wide
                    "
                  >
                    {item}
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

export default Projects;