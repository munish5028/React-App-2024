import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";

export default function Body() {
  return (
    <>
    <Header/>
      <main>
        <div className="container-left">
          <nav className="navbar-left">
            <ul className="menu-items-left">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/catagary">Catagary</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <Link to="/help">Help</Link>
              </li>
              <li>
                <Link to="/navigation">Navigation</Link>
              </li>
              <li>
            <Link to="/form">Form</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/signup">Signup</Link>
          </li>
            </ul>
          </nav>
        </div>
        {/* Ends  left container  */}
      </main>
    </>
  );
}
