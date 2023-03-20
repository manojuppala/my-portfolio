import { Image, Link } from "./atoms";

const ProjectCard = ({
  id,
  image,
  title,
  skills,
  desc,
  github,
}: {
  id: number;
  image?: string;
  title?: string;
  skills?: string;
  desc?: string;
  github?: string;
}) => {
  const skillCount = skills ? skills.split(",")?.length * 1.5 : 0;
  return (
    <div key={id} className="card text-white bg-dark mb-3 cards-fixed-width card-border">
      <div className="inner">
        <Image
          className="card-img-top"
          src={`https://manoj-dev-portfolio.s3.amazonaws.com/projects/${image}`}
          alt="Card image cap"
        />
      </div>
      <div className="card-body">
        <h5 className="card-title text-light">
          <b>{title}</b>
        </h5>
        {skills ? (
          <p className="project-skills">
            <img
              src={`https://skillicons.dev/icons?i=${skills}`}
              alt="project"
              style={{
                width: "100%",
                maxWidth: `${skillCount}rem`,
              }}
            />
          </p>
        ) : null}
        <p className="card-text text-light">{desc}</p>
        <div>
          <Link href={github} className="h4 pr-3 text-secondary">
            <i className="fa fa-github fa-social"></i>
          </Link>
          <Link href={github} className="h4 pr-3 text-secondary">
            <i className="fa fa-eye fa-social"></i>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
