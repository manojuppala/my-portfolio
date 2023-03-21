import * as React from "react";
import { Image, Link } from "../components";

const Dotfiles = (): JSX.Element => {
  return (
    <React.Fragment>
      <p className="h5 text-primary">Dotfiles</p>
      <p className="text-light">
        My installable GNU/Linux dotfiles. These dotfiles are my personal config files for various
        terminal based applications(neovim, bash, kitty, mutt and ranger) that i use. They are
        stored here for convenience so that anyone who wish to configure their machine like mine may
        quickly access them to install. For more info and installing dotfiles whithout any chaos
        follow this <Link href="https://github.com/manojuppala/dotfiles">Installation guide</Link>.
      </p>

      <Image
        src="https://manoj-dev-portfolio.s3.amazonaws.com/dotfiles/desktop.png"
        alt="manoj resume"
        className="home-img"
        center
      />
    </React.Fragment>
  );
};

export default Dotfiles;
