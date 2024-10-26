"use client";

import Link from "next/link";
import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <nav className="flex justify-around items-center p-4 sticky top-0 bg-white s">
        <div className="text-black font-bold text-2xl font-poppins">
          Fabric <span className="text-yellow-500">Fusion</span>
        </div>

        <div className="md:hidden" onClick={toggleSidebar}>
          <button className="text-black focus:outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>

        <ul className="hidden md:flex list-none gap-8">
          <li className="text-lg text-black-600 hover:text-yellow-500 transition-all duration-500 ease-in-out">
            <Link href="/">Home</Link>
          </li>
          <li className="text-lg text-black-600 hover:text-yellow-500 transition-all duration-500 ease-in-out">
            <Link href="/shop">Shop</Link>
          </li>
          <li className="text-lg text-black-600 hover:text-yellow-500 transition-all duration-500 ease-in-out">
            <Link href="/about">About</Link>
          </li>
          <li className="text-lg text-black-600 hover:text-yellow-500 transition-all duration-500 ease-in-out">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <div
        className={`fixed top-0 left-0 h-full bg-white shadow-lg z-50 transition-transform duration-500 ease-in-out ${
          isOpen ? "transform translate-x-0" : "transform -translate-x-full"
        } md:hidden`}
        style={{ width: "250px" }}
      >
        <button onClick={toggleSidebar} className="absolute top-8 right-4 text-black">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <ul className="absolute top-[25%] left-6 flex flex-col p-4 list-none">
          <li className="m-6 text-lg text-black-600 hover:text-yellow-500 transition-all duration-500 ease-in-out">
            <Link href="/">Home</Link>
          </li>
          <li className="m-6 text-lg text-black-600 hover:text-yellow-500 transition-all duration-500 ease-in-out">
            <Link href="/shop">Shop</Link>
          </li>
          <li className="m-6 text-lg text-black-600 hover:text-yellow-500 transition-all duration-500 ease-in-out">
            <Link href="/about">About</Link>
          </li>
          <li className="m-6 text-lg text-black-600 hover:text-yellow-500 transition-all duration-500 ease-in-out">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
