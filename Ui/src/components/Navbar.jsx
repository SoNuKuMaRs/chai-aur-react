import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 flex justify-between items-center h-16">
        <div className="text-2xl font-bold">MyWebsite</div>
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-teal-400 underline">Home</Link>
          <Link to="/about" className="hover:text-teal-400">About</Link>
          <Link to="/services" className="hover:text-teal-400">Services</Link>
          <Link to="/contact" className="hover:text-teal-400">Contact</Link>
        </div>
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden bg-gray-700">
          <Link to="/" className="block py-2 px-4 hover:bg-gray-600">Home</Link>
          <Link to="/about" className="block py-2 px-4 hover:bg-gray-600">About</Link>
          <Link to="/services" className="block py-2 px-4 hover:bg-gray-600">Services</Link>
          <Link to="/contact" className="block py-2 px-4 hover:bg-gray-600">Contact</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
