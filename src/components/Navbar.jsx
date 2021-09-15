/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react"
import handleClick from "./animations/menu_animation"

function Navbar(){
    return(
        <nav className="navbar" id="nav">
            <a href="#" className="navbar-brand">Brand</a>
            <ul className="navbar">
                <li className="nav-item"><a href="#" className="nav-link">Home</a></li>
                <li className="nav-item"><a href="#" className="nav-link">Service</a></li>
                <li className="nav-item"><a href="#" className="nav-link">Contact us</a></li>
                <li className="nav-item"><a href="#" className="nav-link">About us</a></li>
            </ul>
            <div className="buttons" onClick={handleClick} >
                <span className="navbar-toggler" >
                    <span className="icon top"></span>
                    <span className="icon middle"></span>
                    <span className="icon bottom"></span>
                </span>
            </div>
        </nav>
    )
}

export default Navbar