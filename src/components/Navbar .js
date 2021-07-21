import React from "react";
import brand from "../GM.png";
// REACT FONT AWESOME
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";

export const Navbar  = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light ">
        <div className="container">
            
        <a className="navbar-brand" href="#">  <img className="brand" src={brand} alt="brand" /></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <FontAwesomeIcon icon={faBars} style={{color:"#000"}}/>
        </button>
      
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">About me</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">How i work</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">services</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Portofolio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">contacts </a>
            </li>

          </ul>
          
        </div>
        </div>
      </nav>
        )
}
