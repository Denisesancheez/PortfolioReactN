import React from "react";
import Nav from "./Nav.jsx";
import "../css/Header.css"; // Assuming you have a CSS file for styling
const Header = () => {
  return (
<header className="flex flex-col md:flex-row justify-between items-center px-4 md:px-12 py-4 bg-hide">
  <h1 className="text-3xl md:text-4xl font-extrabold text-fuchsia-500 mb-4 md:mb-0">Ds.</h1>
  <Nav />
</header>
  );
};

export default Header;
