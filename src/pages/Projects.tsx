import { Fragment } from "react";
import { ProjectCard } from "../components";
import { ProjectType } from "../components/ProjectCard";

type ProjType = {
  list?: ProjectType[];
};

const Projects = ({ projObj }: { projObj: ProjType }) => {
  return (
    <Fragment>
      <p className="h5 text-primary" id="projects">
        Projects
      </p>
      <div className="card-deck">
        {projObj.list?.map((proj, id) => {
          return <ProjectCard key={id} proj={proj} />;
        })}
      </div>
    </Fragment>
  );
};

export default Projects;
