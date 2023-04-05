import { useState } from "react";

type NavType = {
  sections?: string[];
};

const Navbar = ({ navObject }: { navObject: NavType }) => {
  const [navState, setNavState] = useState("home");

  const sections = navObject?.sections;

  const activeClass = "nav-item active text-center px-2nav-item text-center px-2";
  const inActiveClass = "nav-item text-center px-2nav-item text-center px-2";
  return (
    <nav className="navbar sticky-top navbar-expand-md navbar-dark bg-dark" id="navbarCollapsible">
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
          {sections?.map((nav, id) => {
            const lowercase = nav.toLowerCase();
            return (
              <li key={id} className={navState === lowercase ? activeClass : inActiveClass}>
                <a
                  className="nav-link h5"
                  href={`#${nav === "Home" ? "top" : lowercase}`}
                  onClick={() => setNavState(lowercase)}
                >
                  {nav}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
