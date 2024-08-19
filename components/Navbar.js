"use client"
import { useState } from 'react';
import Link from 'next/link';
import { scroller } from 'react-scroll';
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const scrollToSection = (section) => {
    scroller.scrollTo(section, {
      smooth: true,
      offset: -70, // Adjust for fixed headers if necessary
      duration: 500,
    });
  };
  return (
    <nav className="sticky top-0 p-5 bg-hero-simple">
      <div className="mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-3xl">
          <Link href="/">My Portfolio</Link>
        </div>
        {/* Hamburger Menu */}
        <div className="block lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
              />
            </svg>
          </button>
        </div>
        {/* Dropdown Menu */}
        <div
          className={`w-full lg:flex lg:items-center lg:w-auto lg:static ${
            isOpen ? 'absolute top-12 right-0 ' : 'hidden'
          }`}
        >
          <ul className="lg:flex lg:space-x-8 mx-5 text-2xl">
            <li className="mt-2 lg:mt-0">
              <Link href="/" onClick={()=>scrollToSection("home")}  className="text-white hover:text-gray-300 cursor-pointer" >
                Home
              </Link>
            </li>
            <li className="mt-2 lg:mt-0">
              <Link href="/" onClick={()=>scrollToSection("about")} className="text-white hover:text-gray-300 cursor-pointer">
                About
              </Link>
            </li>
            <li className="mt-2 lg:mt-0">
              <Link href="/" onClick={()=>scrollToSection("skills")} className="text-white hover:text-gray-300 cursor-pointer">
                Skills
              </Link>
            </li>
            <li className="mt-2 lg:mt-0">
              <Link href="/" onClick={()=>scrollToSection("projects")} className="text-white hover:text-gray-300 cursor-pointer">
                Projects
              </Link>
            </li>
            <li className="mt-2 lg:mt-0">
              <Link href="/" onClick={()=>scrollToSection("contact")} className="text-white hover:text-gray-300 cursor-pointer">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
