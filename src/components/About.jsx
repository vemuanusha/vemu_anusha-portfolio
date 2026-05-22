import { motion } from "framer-motion";
import { Code2, Sparkles, Rocket } from "lucide-react";

const stats = [
  {
    icon: <Code2 size={22} />,
    value: "5+",
    label: "Projects",
  },
  {
    icon: <Sparkles size={22} />,
    value: "500+",
    label: "Problems Solved",
  },
  {
    icon: <Rocket size={22} />,
    value: "1",
    label: "Internships",
  },
];

const About = () => {
  return (
    <section
      id="about"
      className="py-16 px-6 bg-[#071225] text-white"
    >
      <div className="max-w-5xl mx-auto">

        {/* TOP TITLE */}
        <p className="text-blue-500 uppercase tracking-[4px] font-semibold mb-4">
          01 — About
        </p>

        {/* HEADING */}
        <h2 className="text-2xl md:text-5xl font-bold leading-tight mb-8">
          Crafting clean, modern web experiences.
        </h2>

        {/* MAIN GRID */}
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-6">

          {/* LEFT CONTENT */}
          <motion.div
            className="max-w-2xl"

            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}

            transition={{
              duration: 0.7,
            }}
          >

            <p className="text-gray-400 text-base leading-8">
              I am a passionate full-stack developer currently pursuing{" "}
              <span className="text-white font-semibold">
                B.Tech in Computer Science Engineering
              </span>{" "}
              at Aditya College of Engineering and Technology. I enjoy building
              responsive, user-friendly, and modern web applications using
              frontend and backend technologies.
            </p>

          </motion.div>

          {/* RIGHT CARDS */}
          <div className="space-y-4 w-full max-w-[360px] ml-auto">

            {stats.map((item, index) => (
              <motion.div
                key={index}

                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}

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
                  px-4 py-3
                  flex items-center gap-3
                  transition-all duration-300
                  hover:border-blue-500/40
                  hover:shadow-[0_0_30px_rgba(59,130,246,0.25)]
                "
              >

                {/* ICON */}
                <div className="
                  w-10 h-10
                  rounded-xl
                  bg-gradient-to-r
                  from-blue-500
                  to-purple-500
                  flex items-center justify-center
                ">
                  {item.icon}
                </div>

                {/* TEXT */}
                <div>
                  <h3 className="text-3xl font-bold leading-none mb-1">
                    {item.value}
                  </h3>

                  <p className="text-gray-400 text-sm">
                    {item.label}
                  </p>
                </div>

              </motion.div>
            ))}

          </div>
        </div>

        {/* EDUCATION CARD */}
        <motion.div

          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}

          whileHover={{
            y: -6,
            scale: 1.01,
          }}

          transition={{
            type: "spring",
            stiffness: 300,
          }}

          className="
            mt-8
            max-w-4xl
            bg-[#111c34]
            border border-white/10
            rounded-2xl
            p-5
            flex flex-col md:flex-row
            justify-between
            items-start md:items-center
            transition-all duration-300
            hover:border-blue-500/40
            hover:shadow-[0_0_30px_rgba(59,130,246,0.25)]
          "
        >

          <div>
            <p className="text-purple-500 uppercase tracking-[4px] font-semibold mb-3">
              Education
            </p>

            <h3 className="text-2xl font-bold mb-2">
              B.Tech in Computer Science Engineering
            </h3>

            <p className="text-gray-400 text-base">
              Aditya College of Engineering and Technology
            </p>
          </div>

          {/* BADGE */}
          <div className="mt-5 md:mt-0">
            <span className="
              px-4 py-2
              rounded-full
              bg-blue-500/10
              border border-blue-500/20
              text-blue-400
              text-sm
              font-semibold
            ">
              Graduating 2027
            </span>
          </div>

        </motion.div>

      </div>
    </section>
  );
};

export default About;