import React, { useEffect } from "react";
import { Navbar, Footer } from "./components";
import { Home, Opensource, Contact, Projects, Skills, Videos, Dotfiles, Resume } from "./pages";
import "highlight.js/styles/github-dark-dimmed.css";
import hljs from "highlight.js";
import config from "./config.json";

function App() {
  useEffect(() => {
    hljs.highlightAll();
  }, []);

  return (
    <React.Fragment>
      <Navbar />
      <Home />
      <Videos />
      <Skills />
      <Projects />
      <Opensource />
      <Dotfiles />
      <Resume />
      <Contact />
      <Footer footerObj={config?.footer} />
    </React.Fragment>
  );
}

export default App;
