import { useState } from "react";
import { Link } from "react-router-dom";
import HamburgerToggle from "../ui/hanburgerToggle";

const navLinks = [
  { title: "About", path: "/#" },
  { title: "Services", path: "/#" },
  { title: "Pricing", path: "/#" },
  { title: "Contact", path: "/#" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full font-inter">
      <section
        className="flex items-center rounded-full bg-secondary z-40
        pl-5 pr-2 md:px-8 py-3 fixed top-8 left-1/2 -translate-x-1/2 w-full max-w-11/12 md:max-w-7xl
        md:min-h-[70px] "
      >
        <div className="mr-auto">
          <Link to="/" className="mr-auto md:h-8 block">
            <img src="/logo.svg" alt="logo" className="h-full" />
          </Link>
        </div>

        <nav className="hidden md:block mr-auto">
          <ul className="flex items-center gap-12">
            {navLinks.map((link, key) => (
              <li key={key}>
                <Link
                  to={link.path}
                  className="text-white relative transition-colors duration-300 hover:text-yellow"
                >
                  <span className="relative group">
                    {link.title}
                    <span
                      className="absolute bottom-[-2px] left-0 w-0 h-[2px] bg-yellow
                      transition-all duration-300 group-hover:w-full"
                    />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="lg:block hidden">
          <Link
            to="#"
            className="bg-yellow flex items-center cursor-pointer hover:bg-yellow/80 transition-colors duration-300 justify-center px-10 py-[14px] rounded-full text-text-dark shadow-sm hover:shadow-md"
          >
            Download
          </Link>
        </div>

        <div className="md:hidden">
          <HamburgerToggle
            isOpen={isMenuOpen}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          />
        </div>
      </section>

      <nav
        className={`md:hidden h-screen w-full pt-12 bg-secondary fixed right-0 bottom-0 z-50 transition-transform duration-400 ease-out
        ${
          isMenuOpen ? "translate-y-0" : "translate-y-full"
        } rounded-t-3xl shadow-2xl`}
      >
        <div className="absolute top-16 right-6">
          <HamburgerToggle
            isOpen={isMenuOpen}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          />
        </div>

        <ul className="flex items-start pt-20 flex-col">
          {navLinks.map((link, key) => (
            <li
              key={key}
              className="w-full hover:bg-black transition-colors duration-300"
              style={{ transitionDelay: `${key * 80}ms` }}
            >
              <Link
                to={link.path}
                className="text-white hover:text-yellow transition-colors p-4 pl-12 duration-300 w-full block text-lg font-medium"
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
