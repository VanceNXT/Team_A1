import React, { useState } from "react";
import Logo from "../assets/vancelogo.png";
import { Link } from "react-router-dom";
import ReorderIcon from "@material-ui/icons/Reorder";
import "../styles/Navbar.css";
import User from "@material-ui/icons/AccountBalanceRounded";
function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };
  return (
    <div className="navbar">
      <div className="leftSide" id={openLinks ? "open" : "close"}>
        <img src={Logo} />
        <div className="hiddenLinks">
          <Link to="/"> Information Services </Link>
          <Link to="/courses"> Courses </Link>
          <Link to="/discuss"> Discussion Forum </Link>
          <Link to="/chatbot"> Chatbot </Link>
          <Link to="/video"> Video catalog </Link>
          <div className="socialMedia"><User/></div>
        </div>
      </div>
      <div className="rightSide">
      <Link to="/"> Information Services </Link>
      <Link to="/courses"> Courses </Link>
      <Link to="/discuss"> Discussion Forum </Link>
      <Link to="/chatbot"> Chatbot </Link>
      <Link to="/video"> Video catalog </Link>
      <User/>
        <button onClick={toggleNavbar}>
          <ReorderIcon />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
