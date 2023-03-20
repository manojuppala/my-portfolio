import { Fragment } from "react";
import { ProjectCard } from "../components";

const data = [
  {
    title: "Tasklist-cli",
    skills: "nodejs,typescript",
    desc: "tasklist-cli is a simple and elegant command line application to manage tasks and todo-lists.",
    github: "https://github.com/manojuppala/tasklist-cli",
    image: "tasklist-cli.jpg",
  },
  {
    title: "Sorting algorithm visualizer",
    skills: "python",
    desc: "A python GUI application to visualize how various sorting algorithms work.",
    github: "https://github.com/manojuppala/sorting-algorithm-visualizer",
    image: "algovisualizer.png",
  },
  {
    title: "YouTube downloader",
    skills: "python",
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
          return <ProjectCard id={id} {...proj} />;
        })}
      </div>
    </Fragment>
  );
};

export default Projects;
