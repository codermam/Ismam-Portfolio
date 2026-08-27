import React, { useEffect, useState } from "react";
import {
  Menu,
  X,
  Home,
  User,
  Code2,
  Briefcase,
  GraduationCap,
  FolderGit2,
  Palette,
  Mail,
  ArrowUpRight,
} from "lucide-react";

const navLinks = [
  { href: "#hero", label: "Home", icon: Home },
  { href: "#about", label: "About", icon: User },
  { href: "#skills", label: "Skills", icon: Code2 },
  { href: "#experience", label: "Experience", icon: Briefcase },
  { href: "#education", label: "Education", icon: GraduationCap },
  { href: "#projects", label: "Projects", icon: FolderGit2 },
  { href: "#designs", label: "Designs", icon: Palette },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [scrolled, setScrolled] = useState(false);

  // Detect scrolling
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const sections = navLinks
        .map((link) => document.querySelector(link.href))
        .filter(Boolean);

      let current = "hero";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {
          current = section.id;
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu when pressing Escape
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  // Prevent body scrolling when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleNavClick = (href) => {
    setIsOpen(false);

    const section = document.querySelector(href);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-black/80 backdrop-blur-xl shadow-lg shadow-black/20"
            : "bg-gradient-to-r from-gray-900/90 to-black/90 backdrop-blur-md"
        }`}
      >
        {/* Top accent line */}
        <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-amber-400 via-orange-500 to-amber-400" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-20 flex items-center justify-between">
            {/* Logo */}
            {/* <button
              onClick={() => handleNavClick("#hero")}
              className="group flex items-center gap-3"
            >
              <div className="relative">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-amber-400 to-orange-600 flex items-center justify-center font-black text-black text-lg shadow-lg shadow-amber-500/20 transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110">
                  P
                </div>

                <span className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-black" />
              </div>

              <div className="hidden sm:block text-left">
                <p className="font-bold text-white leading-none">Ismam Sadat</p>

                <p className="text-xs text-gray-400 mt-1">
                  Developer & Designer
                </p>
              </div>
            </button> */}

            {/* Desktop navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => {
                const Icon = link.icon;
                const isActive = activeSection === link.href.substring(1);

                return (
                  <button
                    key={link.href}
                    onClick={() => handleNavClick(link.href)}
                    className={`relative flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                      isActive
                        ? "text-amber-400 bg-amber-400/10"
                        : "text-gray-300 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    <Icon className="w-4 h-4" />

                    {link.label}

                    {/* Active indicator */}
                    {isActive && (
                      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-5 h-[2px] bg-amber-400 rounded-full" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* CTA */}
            <div className="hidden lg:flex items-center">
              <button
                onClick={() => handleNavClick("#contact")}
                className="group flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 text-black font-semibold text-sm shadow-lg shadow-orange-500/20 transition-all duration-300 hover:shadow-orange-500/40 hover:-translate-y-0.5"
              >
                Let's Talk
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </button>
            </div>

            {/* Mobile menu button */}
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden relative w-11 h-11 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center text-white transition-all duration-300 hover:bg-white/10"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ${
            isOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="border-t border-white/10 bg-black/95 backdrop-blur-xl px-4 py-5">
            <div className="space-y-2">
              {navLinks.map((link) => {
                const Icon = link.icon;
                const isActive = activeSection === link.href.substring(1);

                return (
                  <button
                    key={link.href}
                    onClick={() => handleNavClick(link.href)}
                    className={`w-full flex items-center gap-4 px-4 py-3 rounded-xl text-left transition-all duration-300 ${
                      isActive
                        ? "bg-amber-400/10 text-amber-400 border border-amber-400/20"
                        : "text-gray-300 hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    <Icon className="w-5 h-5" />

                    <span className="font-medium">{link.label}</span>

                    {isActive && (
                      <span className="ml-auto w-2 h-2 rounded-full bg-amber-400" />
                    )}
                  </button>
                );
              })}

              {/* Mobile CTA */}
              <button
                onClick={() => handleNavClick("#contact")}
                className="w-full mt-4 flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-amber-400 to-orange-500 text-black font-bold"
              >
                <Mail className="w-5 h-5" />
                Let's Talk
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
