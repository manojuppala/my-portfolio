import React from "react";
import { Video, Code } from "../components";

const Home = () => {
  return (
    <React.Fragment>
      <p className="h5 text-primary">About</p>
      <p className="text-light">
        Hi i'm Manoj Uppala. A Open Source enthusiast and budding data scientist
        with deep interest in natural language processing, computer vision and
        machine learning. I am currently pursuing bachelors at Lovely
        professional university majoring in Computer science and Data science as
        my minor.
      </p>

      <p className="h5 text-primary">Videos</p>
      <p className="text-light">
        For thousands of years, people have known that the best way to
        understand a concept is to explain it to someone else. So i make
        tutorials on <a href="https://www.youtube.com/thedataguy">YouTube</a>{" "}
        and <a href="https://odysee.com/@thedataguy:7">Odysee</a>. Most of my
        videos concentrate on programming, CS concepts and softwares i use. We
        make computer science tutorials that are crafted with dedication and
        passion. make sure to subscribe if interested in our content.
      </p>
      <Video id="4pGz01s_OZs" />
      <p className="h5 text-primary">Dotfiles</p>
      <p className="text-light">
        My installable GNU/Linux dotfiles running XMonad on Linux Mint. These
        dotfiles are my personal config files for various terminal based
        applications that i use. They are stored here for convenience so that
        anyone who wish to configure their machine like mine may quickly access
        them to install. For more info and installing dotfiles whithout any
        chaos follow this{" "}
        <a href="https://github.com/manojuppala/dotfiles">Installation guide</a>
        . To view my dotfiles visit dotfiles on Github. press <kbd>shift</kbd> +{" "}
        <kbd>ctrl</kbd> + <kbd>p</kbd> <code>install</code>
      </p>

      <Code
        snippet={`# this is hello world! 
int main(){
cout<<"hello world!";
return 0;
}`}
        lang="c"
      />
      <blockquote>
        My installable GNU/Linux dotfiles running XMonad on Linux Mint. These
        dotfiles are my personal config files for various terminal based
        applications that i use.
      </blockquote>
    </React.Fragment>
  );
};

export default Home;
