import React from "react";
import { Github, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 py-8 px-6 text-center">
      <div className="flex justify-center gap-6 mb-4">
        <a
          href="https://github.com/codermam"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="hover:text-amber-400"
        >
          <Github className="w-5 h-5" />
        </a>
        <a
          href="mailto:ismamsadat34@gmail.com"
          aria-label="Email"
          className="hover:text-amber-400"
        >
          <Mail className="w-5 h-5" />
        </a>
        <a
          href="tel:+8801777882244"
          aria-label="Phone"
          className="hover:text-amber-400"
        >
          <Phone className="w-5 h-5" />
        </a>
      </div>
      <p className="text-sm">
        © {new Date().getFullYear()} Ismam Sadat Alam Taseen. All rights
        reserved.
      </p>
    </footer>
  );
};

export default Footer;
