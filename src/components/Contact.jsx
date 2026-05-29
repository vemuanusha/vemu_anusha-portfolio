import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
} from "lucide-react";

const contactItems = [
  {
    icon: <Mail size={20} className="text-blue-500" />,

    title: "EMAIL",

    value: "anushavemu95@gmail.com",

    link: "mailto:anushavemu95@gmail.com",
  },

  {
    icon: <Phone size={20} className="text-blue-500" />,

    title: "PHONE",

    value: "+91 8106726799",

    link: "tel:+918106726799",
  },

  {
    icon: <MapPin size={20} className="text-blue-500" />,

    title: "LOCATION",

    value: "Andhra Pradesh, India",

    link: "#",
  },

  {
    icon: <Github size={20} className="text-blue-500" />,

    title: "GITHUB",

    value: "github.com/vemuanusha",

    link: "https://github.com/vemuanusha",
  },

  {
    icon: <Linkedin size={20} className="text-blue-500" />,

    title: "LINKEDIN",

    value: "linkedin.com/in/anusha-vemu-639213291",

    link: "https://linkedin.com/in/anusha-vemu-639213291",
  },
];

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-24 px-6 bg-[#071225] text-white"
    >
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10">

        {/* LEFT */}
        <motion.div

          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}

          transition={{
            duration: 0.7,
          }}
        >

          {/* TOP TEXT */}
          <p className="text-blue-500 uppercase tracking-[4px] font-semibold mb-4">
            06 — Contact
          </p>

          {/* HEADING */}
          <h2 className="text-2xl md:text-5xl font-bold leading-tight mb-8">
            Let's build something together.
          </h2>

          {/* PARAGRAPH */}
          <p className="text-gray-400 text-base leading-8 mb-8 max-w-xl">
            I'm currently open to internships, collaborations,
            and freelance opportunities. Feel free to connect
            with me anytime.
          </p>

          {/* BUTTON */}
          <a
            href="mailto:anushavemu95@gmail.com"

            className="
              inline-flex items-center gap-3
              px-6 py-3
              rounded-xl
              bg-gradient-to-r
              from-blue-500
              to-purple-500
              text-sm font-semibold
              transition-all duration-300
              hover:scale-105
            "
          >
            <Mail size={18} />

            Say hello
          </a>

        </motion.div>

        {/* RIGHT */}
        <div className="space-y-4 max-w-md ml-auto w-full">

          {contactItems.map((item, index) => (
            <motion.a
              key={index}

              href={item.link}

              target="_blank"

              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}

              whileHover={{
                y: -6,
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
                bg-[#0b1730]
                border border-blue-500/20
                flex items-center justify-center
              ">
                {item.icon}
              </div>

              {/* TEXT */}
              <div>

                <p className="
                  text-gray-400
                  uppercase
                  tracking-[2px]
                  text-[10px]
                  mb-1
                ">
                  {item.title}
                </p>

                <h3 className="
                  text-sm md:text-base
                  font-semibold
                  break-all
                ">
                  {item.value}
                </h3>

              </div>

            </motion.a>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Contact;