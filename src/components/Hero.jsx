import { motion } from "framer-motion";
import { Github, Linkedin, Download } from "lucide-react";
import profilePic from "../assets/img2.jpeg";
import resumeFile from "../assets/ANUSHA.pdf";
import Typewriter from "typewriter-effect";

const Hero = () => {
  return (
    <section
      id="home"
      className="
        min-h-screen
        bg-[#071225]
        text-white
        flex items-center
        px-6
        overflow-hidden
      "
    >
      <div className="max-w-6xl mx-auto w-full">

        {/* MAIN GRID */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT SIDE */}
          <motion.div

            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}

            transition={{ duration: 0.8 }}
          >

            {/* TOP TEXT */}
            <p className="text-blue-500 text-xl mb-6">
              👋 Hello, I'm
            </p>

            {/* NAME */}
            <h1 className="
              text-5xl
              md:text-7xl
              font-extrabold
              leading-tight
              mb-6
            ">
              Vemu{" "}

              <span className="
                bg-gradient-to-r
                from-blue-500
                to-purple-500
                text-transparent
                bg-clip-text
              ">
                Anusha
              </span>
            </h1>

            {/* TYPEWRITER */}
            <div className="
              text-2xl md:text-4xl
              font-bold
              mb-8
              text-white
            ">
              <Typewriter
                options={{
                  strings: [
                    "Full Stack Developer",
                  ],

                  autoStart: true,
                  loop: true,
                }}
              />
            </div>

            {/* PARAGRAPH */}
            <p className="
              text-gray-400
              text-lg
              leading-9
              max-w-xl
              mb-10
            ">
              Passionate Full Stack Developer interested in
              modern web technologies and clean UI design.
            </p>

            {/* BUTTONS */}
            <div className="
              flex flex-wrap
              gap-4
            ">

              {/* RESUME */}
              <a
                href={resumeFile}
                download

                className="
                  inline-flex items-center gap-3
                  px-7 py-4
                  rounded-2xl
                  bg-gradient-to-r
                  from-blue-500
                  to-purple-500
                  text-white
                  font-semibold
                  transition-all duration-300
                  hover:scale-105
                  hover:shadow-[0_0_30px_rgba(59,130,246,0.35)]
                "
              >
                <Download size={20} />

                Download Resume
              </a>

              {/* GITHUB */}
              <a
                href="https://github.com/vemuanusha"
                target="_blank"

                className="
                  inline-flex items-center gap-3
                  px-7 py-4
                  rounded-2xl
                  bg-[#111c34]
                  border border-white/10
                  text-white
                  font-semibold
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:border-blue-500/40
                  hover:shadow-[0_0_25px_rgba(59,130,246,0.25)]
                "
              >
                <Github size={20} />

                GitHub
              </a>

              {/* LINKEDIN */}
              <a
                href="https://linkedin.com/in/anusha-vemu-639213291"
                target="_blank"

                className="
                  inline-flex items-center gap-3
                  px-7 py-4
                  rounded-2xl
                  bg-[#111c34]
                  border border-white/10
                  text-white
                  font-semibold
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:border-blue-500/40
                  hover:shadow-[0_0_25px_rgba(59,130,246,0.25)]
                "
              >
                <Linkedin size={20} />

                LinkedIn
              </a>

            </div>
          </motion.div>

          {/* RIGHT SIDE IMAGE */}
          <motion.div

            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}

            transition={{ duration: 0.8 }}

            className="flex justify-center"
          >

            <div className="relative">

              {/* GLOW */}
              <div className="
                absolute inset-0
                bg-blue-500/20
                blur-[120px]
                rounded-full
              "></div>

              {/* IMAGE */}
              <motion.img
                src={profilePic}
                alt="Vemu Anusha"

                whileHover={{
                  scale: 1.03,
                }}

                transition={{
                  type: "spring",
                  stiffness: 300,
                }}

                className="
                  relative
                  w-[320px]
                  h-[320px]
                  md:w-[420px]
                  md:h-[420px]
                  object-cover
                  object-top
                  rounded-full
                  border-[6px]
                  border-[#1b2948]
                  shadow-[0_0_60px_rgba(59,130,246,0.35)]
                "
              />

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;