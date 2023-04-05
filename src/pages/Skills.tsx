import { Fragment } from "react";
import { Image } from "../components";

type SkillType = {
  list?: string[];
};

const Skills = ({ skillsObj }: { skillsObj: SkillType }) => {
  const skills = skillsObj?.list;
  return (
    <Fragment>
      <p className="h5 text-primary" id="skills">
        Skills
      </p>
      <blockquote>
        Note: My skills are determined based on my previous projects, work experiences etc. I might
        have worked with other frameworks but didn't mention those here because i don't considered
        myself skilled at them.
      </blockquote>
      <Image src={`https://skillicons.dev/icons?i=${skills?.join(",")}`} className="skills" />
    </Fragment>
  );
};

export default Skills;
