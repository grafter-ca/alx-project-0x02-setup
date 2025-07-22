import Link from "next/link";
import React from "react";

const Header: React.FC = () => (
  <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
     <h1 className="text-2xl font-bold"><Link href="/">AirBNB Cloning</Link></h1>
    <nav>
        <div className="flex space-x-4">
        <Link href="/home">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
        </div>
    </nav>
  </header>
);

export default Header;
