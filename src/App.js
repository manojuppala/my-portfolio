import React, { useEffect } from "react";
import { Navbar, Footer } from "./components";
import { Home, Opensource, Contact, Projects, Skills } from "./pages";
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
      <Skills />
      <Projects />
      <Opensource />
      <Contact />
      <Footer />
    </React.Fragment>
  );
}

export default App;
