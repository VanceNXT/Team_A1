import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/back.png";
import "../styles/Home.css";
import Menu from "./Courses";
import Workshop from "../components/Workshop";
function Home() {
  return (
    <div>
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
      <h6>10,000+ mentors</h6>  
      <h1> VanceNXT </h1>
        <p> The aim of the platform will be job creation in digital and futuristic technologies;<br/> develop competency to be 
        relevant and future ready and further <br/>enable in creation of start-ups that create valuable products <br/>and 
        solutions for societal advancement.</p>
        <Link to="/courses">
          <button> my course</button>
        </Link>
        <Link to="/courses"  className="space" >
          <button> show how it works </button>
        </Link>
      </div>
    </div>
    <Menu/>
    <div className="workshop">
    <h1>Workshops</h1>
    <Workshop/>
    <Workshop/>
    <Workshop/>
    </div>
    </div>

  );
}

export default Home;
