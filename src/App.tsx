import React, { useEffect } from "react";
import { Navbar, Footer } from "./components";
import { Home, Opensource, Projects, Skills, Videos, Dotfiles, Resume } from "./pages";
import "highlight.js/styles/github-dark-dimmed.css";
import hljs from "highlight.js";
import config from "./config.json";

function App() {
  useEffect(() => {
    hljs.highlightAll();
  }, []);

  return (
    <React.Fragment>
      <Navbar navObject={config?.navbar} />
      <Home homeObj={config?.body?.home} />
      <Videos />
      <Skills skillsObj={config?.body?.skills} />
      <Projects projObj={config?.body?.projects} />
      <Opensource />
      <Dotfiles />
      <Resume />
      <Footer footerObj={config?.footer} />
    </React.Fragment>
  );
}

export default App;
