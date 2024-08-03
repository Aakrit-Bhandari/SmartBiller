import img1 from "../images/Logo/Logo.png"
import {Link}from "react-router-dom";
import "../Cssfiles/Navbar.css"
export default function Navbar()
{
    return(
        <section className="Navbar_main_div">
            <div className="Navbar_logo">
                <img src={img1}/>
            </div>
            <div className="Navbar_Pages">
                <nav className="Navbar_Pages_nav">
                    <ul className="Navbar_Pages_nav_ul">
                        <li>Home</li>
                        <li>About Us ⇂</li>
                        <li>Sector ⇂</li>
                        <li>Features ⇂</li>
                        <li>Resource ⇂</li>
                        <li>Allocates ⇂</li>
                        <li>Contact Us</li>
                    </ul>
                </nav>
            </div>
            <div className="Navbar_Register">
            <nav className="Navbar_Register_nav">
                    <ul className="Navbar_Register_nav_ul">
                    <Link className="navbar__buttons__sign-in" to="/signin">
                        Sign In
                        </Link>
                    <Link className="navbar_buttons_login" to="/login"><button>Login</button></Link>
                    </ul>
                </nav>
            </div>
        </section>
    );
}