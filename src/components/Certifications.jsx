import { motion } from "framer-motion";
import { BadgeCheck, ExternalLink } from "lucide-react";

const certifications = [
  {
    title: "Generative AI",
    company: "Google Cloud",

    link: "https://www.cloudskillsboost.google/",
  },

  {
    title: "Basics of SQL",
    company: "HackerRank",

    link: "https://www.hackerrank.com/",
  },

  {
    title: "Problem Solving",
    company: "HackerRank",

    link: "https://www.hackerrank.com/",
  },

  {
    title: "500+ Problems Solved",
    company: "CodeChef",

    link: "https://www.codechef.com/",
  },
];

const Certifications = () => {
  return (
    <section
      id="certifications"
      className="py-28 px-6 bg-[#071225] text-white"
    >
      <div className="max-w-6xl mx-auto">

        {/* TOP TEXT */}
        <p className="text-blue-500 uppercase tracking-[4px] font-semibold mb-4">
          05 — Certifications
        </p>

        {/* HEADING */}
        <h2 className="text-2xl md:text-5xl font-bold mb-10">
          Credentials & achievements.
        </h2>

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">

          {certifications.map((item, index) => (
            <motion.a
              key={index}

              href={item.link}
              target="_blank"

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

                {/* ICON */}
                <div className="
                  w-12 h-12
                  rounded-xl
                  bg-[#1a2040]
                  border border-purple-500/20
                  flex items-center justify-center
                ">
                  <BadgeCheck
                    size={22}
                    className="text-purple-400"
                  />
                </div>

                {/* LINK ICON */}
                <ExternalLink
                  size={18}
                  className="text-gray-500"
                />

              </div>

              {/* TITLE */}
              <h3 className="text-lg font-bold mb-3 leading-snug">
                {item.title}
              </h3>

              {/* COMPANY */}
              <p className="text-gray-400 text-sm">
                {item.company}
              </p>

            </motion.a>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Certifications;