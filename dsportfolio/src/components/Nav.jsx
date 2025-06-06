import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaUser, FaFolderOpen } from "react-icons/fa";

const Nav = () => {
  return (
    <nav>
      <ul className="flex gap-8">
        <li>
          <Link
            to="/"
            className="nav-link flex items-center gap-2"
          >
            <FaHome /> Home
          </Link>
        </li>
        <li>
          <Link
            to="/Aboutme"
            className="nav-link flex items-center gap-2"
          >
            <FaUser /> About
          </Link>
        </li>
        <li>
          <Link
            to="/Projects"
            className="nav-link flex items-center gap-2"
          >
            <FaFolderOpen /> Projects
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;