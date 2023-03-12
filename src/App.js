import React, { useEffect } from "react";
import { Navbar, Footer } from "./components";
import {
  Home,
  Opensource,
  Contact,
  Projects,
  Skills,
  Videos,
  Dotfiles,
  Resume,
} from "./pages";
import "highlight.js/styles/github-dark-dimmed.css";
import hljs from "highlight.js";

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
      <Footer />
    </React.Fragment>
  );
}

export default App;
