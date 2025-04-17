import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { FaBarsStaggered } from "react-icons/fa6";
import { Link } from "react-router-dom";

const navLinks = [
  {
    title: "About",
    path: "/#",
  },
  { title: "Services", path: "/#" },
  { title: "Pricing", path: "/#" },
  {
    title: "Contact",
    path: "/#",
  },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className="w-full font-inter">
      <section className="flex items-center rounded-full bg-secondary pl-5 pr-2 md:px-8 py-3 fixed top-8 left-1/2 -translate-x-1/2 w-full max-w-11/12 md:max-w-7xl md:min-h-[70px] z-50">
        <div className="mr-auto">
          <Link to="/" className="h-2 mr-auto md:h-16">
            <img src="/logo.svg" alt="logo" className="h-full" />
          </Link>
        </div>

        <nav className="hidden md:block mr-auto">
          <ul className="flex items-center gap-12">
            {navLinks.map((link, key) => (
              <li key={key}>
                <Link
                  to={link.path}
                  className="text-white hover:text-yellow transition-colors duration-300"
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="lg:block hidden">
          <Link
            to="#"
            className="bg-yellow flex items-center cursor-pointer hover:bg-yellow/80 transition-colors duration-300 justify-center px-10 py-[14px] rounded-full text-text-dark"
          >
            Download
          </Link>
        </div>

        <div className="md:hidden">
          <button
            className="bg-yellow flex items-center cursor-pointer hover:bg-yellow/80 transition-colors duration-300 justify-center p-4 rounded-full"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <FaBarsStaggered className="font-extrabold" size={20} />
          </button>
        </div>
      </section>

      <nav
        className={`md:hidden h-screen w-full pt-12 bg-secondary fixed right-0 bottom-0 z-50 ${
          isMenuOpen ? "translate-y-0" : "translate-y-full"
        } transition-transform duration-300`}
        style={{
          transitionTimingFunction: "ease-out",
        }}
      >
        <div className="absolute top-12 right-6">
          <button
            className="bg-yellow flex items-center cursor-pointer hover:bg-yellow/80 transition-colors duration-300 justify-center p-4 rounded-full"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <FaTimes size={20} />
          </button>
        </div>
        <ul className="flex items-start pt-14 flex-col">
          {navLinks.map((link, key) => (
            <li
              key={key}
              className="w-full hover:bg-[#000000] transition-colors duration-300"
            >
              <Link
                to={link.path}
                className="text-white hover:text-yellow transition-colors p-4 pl-12 duration-300 w-full block"
              >
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
