import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";

const Footer = () => {
  return (
    <footer className="
      relative
      border-t border-white/10
      bg-[#071225]
      py-8 px-6
      text-white
    ">
      <div className="
        max-w-6xl mx-auto
        flex flex-col md:flex-row
        items-center
        justify-between
        gap-6
      ">

        {/* LEFT */}
        <p className="text-gray-400 text-sm">
          © 2026{" "}

          <span className="text-white font-semibold">
            Vemu Anusha
          </span>

          . Built with React & Tailwind.
        </p>

        {/* RIGHT ICONS */}
        <div className="flex items-center gap-5">

          <a
            href="https://github.com/vemuanusha"
            target="_blank"

            className="
              text-gray-400
              hover:text-blue-500
              transition-all duration-300
              hover:-translate-y-1
            "
          >
            <Github size={20} />
          </a>

          <a
            href="https://linkedin.com/in/anusha-vemu-639213291"
            target="_blank"

            className="
              text-gray-400
              hover:text-blue-500
              transition-all duration-300
              hover:-translate-y-1
            "
          >
            <Linkedin size={20} />
          </a>

          <a
            href="mailto:anushavemu95@gmail.com"

            className="
              text-gray-400
              hover:text-blue-500
              transition-all duration-300
              hover:-translate-y-1
            "
          >
            <Mail size={20} />
          </a>

        </div>
      </div>

      {/* SCROLL TO TOP BUTTON */}
      <a
        href="#home"

        className="
          fixed bottom-6 right-6
          w-14 h-14
          rounded-full
          bg-gradient-to-r
          from-blue-500
          to-purple-500
          flex items-center justify-center
          shadow-[0_0_30px_rgba(59,130,246,0.4)]
          hover:scale-110
          transition-all duration-300
          z-50
        "
      >
        <ArrowUp size={24} />
      </a>
    </footer>
  );
};

export default Footer;