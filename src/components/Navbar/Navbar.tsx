import { Link, useLocation } from "react-router";

function Navbar() {
    let location = useLocation()

    const activeLinkStyle = {
        color: "#9929EA",
    }

    return (
        <div className="container">
            <nav className="navbar">
                <p>UBAID UR REHMAN</p>
                <div className="nav-links">
                    <Link style={location.pathname === "/" ? activeLinkStyle : {}} to="/">HOME</Link>
                    <Link style={location.pathname === "/projects" ? activeLinkStyle : {}} to="/projects">PROJECTS</Link>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;
