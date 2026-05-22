import { motion } from "framer-motion";
import { BriefcaseBusiness } from "lucide-react";

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-14 px-6 bg-[#071225] text-white"
    >
      <div className="max-w-5xl mx-auto">

        {/* TOP TEXT */}
        <p className="text-blue-500 uppercase tracking-[4px] font-semibold mb-4">
          03 — Experience
        </p>

        {/* HEADING */}
        <h2 className="text-2xl md:text-5xl font-bold mb-10">
          Where I've been building.
        </h2>

        {/* TIMELINE */}
        <div className="relative border-l border-white/10 pl-6">

          {/* DOT */}
          <div className="
            absolute
            left-[-8px]
            top-4
            w-4 h-4
            rounded-full
            bg-gradient-to-r
            from-blue-500
            to-purple-500
          "></div>

          {/* CARD */}
          <motion.div

            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}

            whileHover={{
              y: -8,
              scale: 1.01,
            }}

            transition={{
              type: "spring",
              stiffness: 300,
            }}

            className="
              bg-[#111c34]
              border border-white/10
              rounded-2xl
              p-5
              flex flex-col lg:flex-row
              justify-between
              gap-8
              transition-all duration-300
              hover:border-blue-500/40
              hover:shadow-[0_0_30px_rgba(59,130,246,0.25)]
            "
          >

            {/* LEFT CONTENT */}
            <div>

              {/* TOP */}
              <div className="flex items-start gap-4 mb-6">

                {/* ICON */}
                <div className="
                  w-12 h-12
                  rounded-xl
                  bg-[#0b1730]
                  border border-blue-500/20
                  flex items-center justify-center
                ">
                  <BriefcaseBusiness
                    size={22}
                    className="text-blue-500"
                  />
                </div>

                {/* TEXT */}
                <div>
                  <h3 className="text-2xl font-bold mb-1">
                    Web Development Intern
                  </h3>

                  <p className="text-gray-400 text-base">
                    APSSDC Internship
                  </p>
                </div>

              </div>

              {/* LIST */}
              <ul className="space-y-3 text-gray-400 text-sm leading-7">

                <li>
                  • Developed full-stack web applications using Django and REST APIs
                </li>

                <li>
                  • Worked on debugging and testing across the stack
                </li>

                <li>
                  • Used Git for version control and collaborative workflows
                </li>

                <li>
                  • Integrated authentication systems for secure user access
                </li>

              </ul>
            </div>

            {/* DATE */}
            <div>
              <span className="
                px-4 py-2
                rounded-full
                bg-purple-500/10
                border border-purple-500/20
                text-purple-400
                text-xs
                font-semibold
                whitespace-nowrap
              ">
                May 2025 – July 2025
              </span>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;