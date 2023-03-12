import React from "react";

const Navbar = () => {
  const router = window.location;

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
          <li className={router.pathname === "/" ? activeClass : inActiveClass}>
            <a className="nav-link h5" href="#top">
              Home
            </a>
          </li>
          <li
            className={
              router.pathname === "/about" ? activeClass : inActiveClass
            }
          >
            <a className="nav-link h5" href="#about">
              About
            </a>
          </li>
          <li
            className={
              router.pathname === "/skills" ? activeClass : inActiveClass
            }
          >
            <a className="nav-link h5" href="#skills">
              Skills
            </a>
          </li>
          <li
            className={
              router.pathname === "/projects" ? activeClass : inActiveClass
            }
          >
            <a className="nav-link h5" href="#projects">
              Projects
            </a>
          </li>
          <li
            className={
              router.pathname === "/opensource" ? activeClass : inActiveClass
            }
          >
            <a className="nav-link h5" href="#opensource">
              Open-source
            </a>
          </li>
          <li
            className={
              router.pathname === "/opensource" ? activeClass : inActiveClass
            }
          >
            <a className="nav-link h5" href="#resume">
              Resume
            </a>
          </li>
          <li
            className={
              router.pathname === "/opensource" ? activeClass : inActiveClass
            }
          >
            <a className="nav-link h5" href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
