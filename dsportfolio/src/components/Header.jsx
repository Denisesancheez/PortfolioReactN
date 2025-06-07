import React from "react";
import Nav from "./Nav.jsx";
import "../css/Header.css"; 
const Header = () => {
  return (
<header className="flex flex-col md:flex-row justify-between items-center px-4 md:px-12 py-4 bg-hide">
  <h1 className="purple">Ds.</h1>
  <Nav />
</header>
  );
};

export default Header;
