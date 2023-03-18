import { Fragment } from "react";
import { Image } from "../components";

function Dotfiles() {
  return (
    <Fragment>
      <p className="h5 text-primary">Dotfiles</p>
      <p className="text-light">
        My installable GNU/Linux dotfiles. These dotfiles are my personal config
        files for various terminal based applications(neovim, bash, kitty, mutt
        and ranger) that i use. They are stored here for convenience so that
        anyone who wish to configure their machine like mine may quickly access
        them to install. For more info and installing dotfiles whithout any
        chaos follow this{" "}
        <a href="https://github.com/manojuppala/dotfiles">Installation guide</a>
        .
      </p>
      <p align="center">
        <Image
          src="https://manoj-dev-portfolio.s3.amazonaws.com/dotfiles/desktop.png"
          alt="manoj resume"
          style={{ width: "100%", maxWidth: "30rem", borderRadius: "5px" }}
        />
      </p>
    </Fragment>
  );
}

export default Dotfiles;
