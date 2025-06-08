import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaUser, FaFolderOpen } from "react-icons/fa";
import { FaRegMoon, FaRegSun } from "react-icons/fa";
import useStore from '../store/useStore'; 

const Nav = () => {
  const { color, cambiarColor, texto, cambiarTexto } = useStore();
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
        <li>
          <Link
            to="/Contact"
            className="nav-link flex items-center gap-2"
          >
            <FaUser /> Contact
          </Link>
        </li>
        <li>
        <button
  onClick={() => {
    cambiarColor();
    cambiarTexto();
  }}
  style={{ display: "flex", alignItems: "center", gap: "20px" }}
>
  {color ? <FaRegSun size={28} /> : <FaRegMoon size={28} />}
</button></li>
      </ul>
    </nav>
  );
};

export default Nav;