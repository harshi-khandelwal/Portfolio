import { useState } from "react";
import { Link } from "react-scroll";
import { FiMenu, FiX } from "react-icons/fi"; 

const navItems = [
  { id: "about", label: "About" },
  { id: "education", label: "Education" },
  { id: "skills", label: "Skills" },
  { id: "portfolio", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export default function Navbar({ showCanvas, setShowCanvas }) {
  const [active, setActive] = useState("about");
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-black/70 backdrop-blur-md z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-3 flex justify-between items-center">

        <div className="text-white font-bold text-xl">Portfolio</div>
        <div className="hidden md:flex gap-6 items-center">
          {navItems.map((item) => (
            <Link
              key={item.id}
              to={item.id}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onSetActive={() => setActive(item.id)}
              className={`cursor-pointer text-sm sm:text-base transition-colors duration-200 ${
                active === item.id
                  ? "text-white font-semibold"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {item.label}
            </Link>
          ))}

          <button
            onClick={() => setShowCanvas((prev) => !prev)}
            className={`px-3 py-1 rounded text-sm sm:text-base font-semibold transition ${
              showCanvas
                ? "bg-yellow-500 text-black hover:bg-yellow-600"
                : "bg-gray-600 text-white hover:bg-gray-700"
            }`}
          >
            {showCanvas ? "Disable Drawing" : "Enable Drawing"}
          </button>
        </div>

        <button
          onClick={toggleMenu}
          className="md:hidden text-white text-2xl"
          aria-label="Toggle menu"
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

   
      {menuOpen && (
        <div className="md:hidden bg-black/90 px-6 py-4 space-y-4">
          {navItems.map((item) => (
            <Link
              key={item.id}
              to={item.id}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onSetActive={() => {
                setActive(item.id);
                closeMenu();
              }}
              className={`block text-sm transition-colors duration-200 ${
                active === item.id
                  ? "text-white font-semibold"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {item.label}
            </Link>
          ))}

          <button
            onClick={() => {
              setShowCanvas((prev) => !prev);
              closeMenu();
            }}
            className={`w-full px-3 py-2 rounded text-sm font-semibold transition ${
              showCanvas
                ? "bg-yellow-500 text-black hover:bg-yellow-600"
                : "bg-gray-600 text-white hover:bg-gray-700"
            }`}
          >
            {showCanvas ? "Disable Drawing" : "Enable Drawing"}
          </button>
        </div>
      )}
    </nav>
  );
}
