import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-gradient-to-r from-gray-800 to-black text-white shadow-md">
      <div className="max-w-6xl mx-auto">
        <ul className="flex justify-end gap-4 md:gap-6 p-4">
          <li><a href="#hero" className="btn btn-outline text-white border-white hover:bg-white hover:text-black">Cover</a></li>
          <li><a href="#about" className="btn btn-outline text-white border-white hover:bg-white hover:text-black">About Me</a></li>
          <li><a href="#education" className="btn btn-outline text-white border-white hover:bg-white hover:text-black">Education</a></li>
          <li><a href="#projects" className="btn btn-outline text-white border-white hover:bg-white hover:text-black">Projects</a></li>
          <li><a href="#contact" className="btn btn-outline text-white border-white hover:bg-white hover:text-black">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
