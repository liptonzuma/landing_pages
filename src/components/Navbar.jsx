/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { Button } from "@material-ui/core"
import React from "react"
import handleClick from "../animations/menu_animation"

function Navbar(){
    return(
        <nav className="navbar" id="nav">
            <a href="#" className="navbar-brand">Cream</a>
            <ul className="navbar" id="navbar">
                <li className="nav-item"><a href="#" className="nav-link">Today's Pick</a></li>
                <li className="nav-item"><a href="#" className="nav-link">Out flavors</a></li>
                <li className="nav-item"><a href="#" className="nav-link">Our stories</a></li>
                <li className="nav-item"><a href="#" className="nav-link">locations</a></li>
            </ul>
            <div className="data">
                <Button  className="but">
                <span><i className="fa fa-shopping-cart"></i></span>
                </Button>
                <Button  className="but">
                <span><i className="fa fa-user-circle"></i></span>
                </Button>
            </div>
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