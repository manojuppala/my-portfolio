import { Fragment } from "react";
import { Image } from "../components";

const Skills = () => {
  return (
    <Fragment>
      <p className="h5 text-primary" id="skills">
        Skills
      </p>
      <blockquote>
        Note: My skills are determined based on my previous projects, work
        experiences etc. I might have worked with other frameworks but didn't
        mention those here because i don't considered myself skilled at them.
      </blockquote>
      <p>
        <Image
          src="https://skillicons.dev/icons?i=javascript,typescript,python,react,graphql,nextjs,materialui,postgres,postman,git,latex,neovim,vscode,md,bash,linux,html,css"
          style={{ width: "100%", maxWidth: "45rem" }}
        />
      </p>
    </Fragment>
  );
};

export default Skills;
