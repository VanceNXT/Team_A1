import React from 'react';
import "../styles/Workshop.css";
import Iot from "../assets/iot.png";
import who from "../assets/who.png";
function Workshop() {
  return (
    <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img src={Iot} alt="Avatar" />
          </div>
          <div className="flip-card-back">
          <img className='who' src={who} alt="Avatar" />
          </div>
        </div>
      </div>
  );
}

export default Workshop;
