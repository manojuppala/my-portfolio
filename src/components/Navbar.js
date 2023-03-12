import React, { useState } from "react";

const Navbar = () => {
  const router = window.location;
  const [navState, setNavState] = useState("home");

  const activeClass =
    "nav-item active text-center px-2nav-item text-center px-2";
  const inActiveClass = "nav-item text-center px-2nav-item text-center px-2";
  return (
    <nav
      className="navbar sticky-top navbar-expand-md navbar-dark bg-dark"
      id="navbarCollapsible"
    >
      <button
        className="navbar-toggler btn"
        type="button"
        data-toggle="collapse"
        data-target="#collapsibleNavbar"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="collapsibleNavbar">
        <ul className="navbar-nav mx-auto">
          <li className={navState === "home" ? activeClass : inActiveClass}>
            <a
              className="nav-link h5"
              href="#top"
              onClick={() => setNavState("home")}
            >
              Home
            </a>
          </li>
          <li className={navState === "about" ? activeClass : inActiveClass}>
            <a
              className="nav-link h5"
              href="#about"
              onClick={() => setNavState("about")}
            >
              About
            </a>
          </li>
          <li className={navState === "skills" ? activeClass : inActiveClass}>
            <a
              className="nav-link h5"
              href="#skills"
              onClick={() => setNavState("skills")}
            >
              Skills
            </a>
          </li>
          <li className={navState === "projects" ? activeClass : inActiveClass}>
            <a
              className="nav-link h5"
              href="#projects"
              onClick={() => setNavState("projects")}
            >
              Projects
            </a>
          </li>
          <li
            className={navState === "opensource" ? activeClass : inActiveClass}
          >
            <a
              className="nav-link h5"
              href="#opensource"
              onClick={() => setNavState("opensource")}
            >
              Open-source
            </a>
          </li>
          <li className={navState === "resume" ? activeClass : inActiveClass}>
            <a
              className="nav-link h5"
              href="#resume"
              onClick={() => setNavState("resume")}
            >
              Resume
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
