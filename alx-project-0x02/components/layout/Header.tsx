import Link from "next/link";
import React from "react";

const Header: React.FC = () => (
  <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
     <h1 className="text-2xl font-bold"><Link href="/"> Airbnb Clone</Link></h1>
    <nav>
        <div className="hidden lg:flex space-x-4">
        <Link href="/home">Home</Link>
        <Link href="/posts">Post</Link>
        <Link href="/users">User</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
        </div>
    </nav>
    <div className="lg:hidden">
      <button title="Menu" aria-label="button" role="menu" type="button" className="text-white focus:outline-none">
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
  </header>
);

export default Header;



