import { useEffect } from "react";
import { useLocation } from "react-router";

function Navbar() {
    let location = useLocation()

    const activeLinkStyle = {
        color: "#9929EA",
    }

    return (
        <div className="container">
            <nav className="navbar">
                <p className="logo">UBAID REHMAN</p>
                <div className="nav-links">
                    <a style={location.pathname === "/" ? activeLinkStyle : {}} href="/">HOME</a>
                    <a style={location.pathname === "/projects" ? activeLinkStyle : {}} href="/projects">PROJECTS</a>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;
