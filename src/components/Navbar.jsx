import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#hero", label: "Cover" },
  { href: "#about", label: "About Me" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#education", label: "Education" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-gradient-to-r from-gray-800 to-black text-white shadow-md">
      <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
        {/* Mobile logo */}
        <span className="font-bold text-lg text-amber-400 md:hidden">
          Portfolio
        </span>

        {/* Desktop links */}
        <ul className="hidden md:flex justify-end gap-4 flex-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="btn btn-outline text-white border-white hover:bg-white hover:text-black"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          type="button"
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
        >
          {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {isOpen && (
        <ul id="mobile-menu" className="md:hidden flex flex-col gap-2 p-4 pt-0">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block btn btn-outline w-full text-white border-white hover:bg-white hover:text-black"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
