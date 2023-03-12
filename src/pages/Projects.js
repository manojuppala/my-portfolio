import React from "react";
import "../styles/projects.css";

const data = [
  {
    title: "Sorting algorithm visualizer",
    tools: "python",
    desc: "A python GUI application to visualize how various sorting algorithms work.",
    github: "https://github.com/manojuppala/sorting-algorithm-visualizer",
    image: "algovisualizer.png",
  },
];

const Projects = () => {
  return (
    <React.Fragment>
      <p className="h5 text-primary">Projects</p>
      <div class="card-deck">
        {data.map((proj) => {
          return (
            <div class="card text-white bg-dark mb-3 cards-fixed-width card-border">
              <div class="inner">
                <img
                  class="card-img-top"
                  src={`https://manoj-dev-portfolio.s3.amazonaws.com/projects/${proj.image}`}
                  alt="Card image cap"
                />
              </div>
              <div class="card-body">
                <h5 class="card-title text-light">
                  <b>{proj.title}</b>
                </h5>
                <p>
                  <img
                    src={`https://skillicons.dev/icons?i=${proj.tools}`}
                    style={{ width: "100%", maxWidth: "2rem" }}
                  />
                </p>
                <p class="card-text text-light">{proj.desc}</p>
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
    </React.Fragment>
  );
};

export default Projects;
