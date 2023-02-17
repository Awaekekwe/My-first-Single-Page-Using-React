import React from "react";
import {BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import AboutUs from "./AboutUs";

export default function Header() {
  return (
    <Router>
      <div className="navbar">
        <img className="logo" src="/AKDESIGNS.jpg" alt="logo" />
        <a href="Home">
          <h3>Home</h3>
        </a>
        <div class="dropdown">
          <h3 class="dropbtn">Products</h3>
          {/* <div class="dropdown-content">
            <Link to="/webDesigns">Web Designs</Link>
            <Link to="/dLogoDesigns">3D Logo Designs</Link>
            <Link to="/packagingDesigns">Packaging Designs</Link>
            <Link to="/motionGraphics">Motion Graphic and Animations</Link>
          </div> */}
        </div>
        <Routes>
            <Route exact path="/webDesigns" element={<webDesigns />}></Route>
              <Route
                exact
                path="/3dLogoDesigns"
                element={<dLogoDesigns />}
              ></Route>
              <Route
                path="/packagingDesigns"
                exact
                element={<packagingDesigns />}
              ></Route>
              <Route
                exact
                path="/motionGraphics"
                element={<motionGraphics />}
              ></Route>
            </Routes>

            <Link to="/AboutUs">
          <h3>About Us</h3>
        </Link>

        <Routes>
        <Route exact path="/Aboutus" element={<AboutUs/>}></Route>
        </Routes>
    
        <Link to="Sign In">
          <h3>Sign In</h3>
        </Link>
        <Link to="SignUp">
          <h3 className="nav-sign-up">Sign Up</h3>
        </Link>
        <Routes>
            <Route exact path="/SignUp" element={<signUp />}></Route>
        </Routes>
      </div>
    </Router>
  );
}
