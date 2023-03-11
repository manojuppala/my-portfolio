import React from "react";

const Navbar = () => {
  const router = window.location;

  const activeClass = "nav-item active text-center px-2nav-item text-center px-2";
  const inActiveClass = "nav-item text-center px-2nav-item text-center px-2";

  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark" id="navbarCollapsible">
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
            <a className="nav-link h5" href="/">
              Home
            </a>
          </li>
          <li className={router.pathname === "/articles" ? activeClass : inActiveClass}>
            <a className="nav-link h5" href="/articles">
              Articles
            </a>
          </li>
          <li className={router.pathname === "/projects" ? activeClass : inActiveClass}>
            <a className="nav-link h5" href="/projects">
              Projects
            </a>
          </li>
          <li className={router.pathname === "/opensource" ? activeClass : inActiveClass}>
            <a className="nav-link h5" href="/opensource">
              Open-source
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
