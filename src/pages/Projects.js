import { Fragment } from "react";
import { Image } from "../components";
import "../styles/projects.css";

const data = [
  {
    title: "Tasklist-cli",
    tools: "nodejs,typescript",
    desc: "tasklist-cli is a simple and elegant command line application to manage tasks and todo-lists.",
    github: "https://github.com/manojuppala/tasklist-cli",
    image: "tasklist-cli.jpg",
  },
  {
    title: "Sorting algorithm visualizer",
    tools: "python",
    desc: "A python GUI application to visualize how various sorting algorithms work.",
    github: "https://github.com/manojuppala/sorting-algorithm-visualizer",
    image: "algovisualizer.png",
  },
  {
    title: "YouTube downloader",
    tools: "python",
    desc: "A python GUI application to download youtube videos,thumbnails and video descriptions.",
    github: "https://github.com/manojuppala/pytube-dl",
    image: "ytdownloader.png",
  },
];

const Projects = () => {
  return (
    <Fragment>
      <p className="h5 text-primary" id="projects">
        Projects
      </p>
      <div className="card-deck">
        {data.map((proj, id) => {
          return (
            <div
              key={id}
              className="card text-white bg-dark mb-3 cards-fixed-width card-border"
            >
              <div className="inner">
                <Image
                  className="card-img-top"
                  src={`https://manoj-dev-portfolio.s3.amazonaws.com/projects/${proj.image}`}
                  alt="Card image cap"
                />
              </div>
              <div className="card-body">
                <h5 className="card-title text-light">
                  <b>{proj.title}</b>
                </h5>
                <p className="project-skills">
                  <img
                    src={`https://skillicons.dev/icons?i=${proj.tools}`}
                    style={{
                      width: "100%",
                      maxWidth: `${proj.tools.split(",").length * 1.5}` + "rem",
                    }}
                  />
                </p>
                <p className="card-text text-light">{proj.desc}</p>
                <div>
                  <a
                    href={proj.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h4 pr-3 text-secondary"
                  >
                    <i className="fa fa-github fa-social"></i>
                  </a>
                  <a
                    href={proj.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h4 pr-3 text-secondary"
                  >
                    <i className="fa fa-eye fa-social"></i>
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Fragment>
  );
};

export default Projects;
