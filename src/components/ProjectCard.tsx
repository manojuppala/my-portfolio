import { Image, Link } from "./atoms";

export type ProjectType = {
  img: string;
  title?: string;
  skills?: string[];
  desc?: string;
  github?: string;
};

const ProjectCard = ({ proj }: { proj: ProjectType }) => {
  const skillCount = proj.skills ? proj.skills?.length * 1.5 : 0;
  return (
    <div className="card text-white bg-dark mb-3 cards-fixed-width card-border">
      <div className="inner">
        <Image className="card-img-top" src={proj?.img} alt="Card image cap" />
      </div>
      <div className="card-body">
        <h5 className="card-title text-light">
          <b>{proj?.title}</b>
        </h5>
        {proj?.skills ? (
          <p className="project-skills">
            <img
              src={`https://skillicons.dev/icons?i=${proj.skills.join(",")}`}
              alt="project"
              style={{
                width: "100%",
                maxWidth: `${skillCount}rem`,
              }}
            />
          </p>
        ) : null}
        <p className="card-text text-light">{proj?.desc}</p>
        <div>
          <Link href={proj?.github} className="h4 pr-3 text-secondary">
            <i className="fa fa-github fa-social"></i>
          </Link>
          <Link href={proj?.github} className="h4 pr-3 text-secondary">
            <i className="fa fa-eye fa-social"></i>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
