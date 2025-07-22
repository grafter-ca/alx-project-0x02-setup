import React from "react";
import { HeaderProps } from "@/interfaces";

const Header: React.FC<HeaderProps> = ({ title, links }) => (
  <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
     <h1 className="text-2xl font-bold"><a href="/">{title}</a></h1>
    <nav>
      <ul className="flex space-x-4">
        {links.map((link, idx) => (
          <li key={idx}>
            <a href={link.href} className="hover:text-amber-200">
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  </header>
);

export default Header;
