import { Link } from 'react-scroll'

const Navbar = () => {
  const navItems = ['About', 'Skills', 'Experience', 'Projects', 'Certifications', 'Contact']

  return (
    <nav className="fixed top-0 left-0 w-full z-50 glass">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <h1 className="text-2xl font-bold text-cyan-400">Vemu Anusha</h1>

        <div className="hidden md:flex gap-6">
          {navItems.map((item) => (
            <Link
              key={item}
              to={item.toLowerCase()}
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-cyan-400 transition"
            >
              {item}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}

export default Navbar