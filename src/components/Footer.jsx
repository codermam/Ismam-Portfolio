import React, { useEffect, useState } from "react";
import { Github, Menu, X, Download, Mail, ArrowUpRight } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navItems
        .map((item) => document.querySelector(item.href))
        .filter(Boolean);

      let current = "home";

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

  const handleNavClick = () => {
    setIsOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/80 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="h-20 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            className="group flex items-center gap-2"
            onClick={handleNavClick}
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-black font-black text-lg shadow-lg shadow-amber-500/20 group-hover:scale-110 transition-transform duration-300">
              I
            </div>

            <div className="hidden sm:block">
              <p className="text-white font-bold leading-none">Ismam Sadat</p>
              <span className="text-xs text-gray-500">Developer</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1 p-1 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md">
            {navItems.map((item) => {
              const sectionName = item.href.substring(1);
              const isActive = activeSection === sectionName;

              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={handleNavClick}
                  className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? "text-black bg-amber-400 shadow-lg shadow-amber-400/20"
                      : "text-gray-400 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {item.name}
                </a>
              );
            })}
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="https://github.com/codermam"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="w-10 h-10 rounded-full border border-white/10 bg-white/[0.04] flex items-center justify-center text-gray-400 hover:text-white hover:border-amber-400/50 hover:bg-amber-400/10 transition-all duration-300"
            >
              <Github className="w-5 h-5" />
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 px-5 py-2.5 rounded-full bg-amber-400 text-black font-semibold text-sm hover:bg-amber-300 hover:scale-105 transition-all duration-300 shadow-lg shadow-amber-400/10"
            >
              <Download className="w-4 h-4" />
              Resume
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            className="lg:hidden w-11 h-11 rounded-xl border border-white/10 bg-white/[0.04] flex items-center justify-center text-white hover:border-amber-400/50 hover:text-amber-400 transition-all"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            isOpen ? "max-h-[500px] pb-5" : "max-h-0"
          }`}
        >
          <div className="p-3 rounded-2xl bg-black/95 backdrop-blur-xl border border-white/10 shadow-2xl">
            <div className="space-y-1">
              {navItems.map((item) => {
                const sectionName = item.href.substring(1);
                const isActive = activeSection === sectionName;

                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={handleNavClick}
                    className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                      isActive
                        ? "bg-amber-400 text-black"
                        : "text-gray-400 hover:text-white hover:bg-white/10"
                    }`}
                  >
                    {item.name}

                    {isActive && (
                      <span className="w-2 h-2 rounded-full bg-black" />
                    )}
                  </a>
                );
              })}
            </div>

            <div className="h-px bg-white/10 my-3" />

            <div className="grid grid-cols-2 gap-2">
              <a
                href="https://github.com/codermam"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3 rounded-xl bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:bg-white/10 transition"
              >
                <Github className="w-4 h-4" />
                GitHub
              </a>

              <a
                href="mailto:ismamsadat34@gmail.com"
                className="flex items-center justify-center gap-2 py-3 rounded-xl bg-amber-400 text-black font-semibold hover:bg-amber-300 transition"
              >
                <Mail className="w-4 h-4" />
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
