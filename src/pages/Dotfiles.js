import React from "react";

function Dotfiles() {
  return (
    <React.Fragment>
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
    </React.Fragment>
  );
}

export default Dotfiles;
