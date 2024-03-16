import React from "react";
import logo from "../assets/purple-logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <section id="nav">
      <div className="container">
        <div className="row">
          <nav>
            <Link to="/">
              <img src={logo} alt="Logo" className="purple-logo" />
            </Link>
            <ul className="nav__links">
              <Link
                to="/"
                className="nav__link--homePage nav__link--homePage-active link__hover-effect"
              >
                Home
              </Link>
              <Link
                to="/movies/avengers"
                className="nav__link--homePage link__hover-effect"
              >
                Find a movie
              </Link>

              <Link href="#" className="nav__link--primary-homePage">
                Contact
              </Link>
            </ul>
          </nav>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
