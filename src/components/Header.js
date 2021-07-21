import React from "react";
import Typed from "react-typed";
export const Header = () => {
    return (
        <div>
        <div className="header-wraper">
            <div className="main-info">
                <h1>Web developement</h1>
                <Typed 
                className="typed-text"
                strings = {["Web developer", "HTML Email dev"]} 
                typeSpeed={50}
                backSpeed={70}
                loop
                 />
                <a className ="btn-main-offer" href="#">Contact</a>
                 
            </div>
        </div>
            
        </div>
    )
}
