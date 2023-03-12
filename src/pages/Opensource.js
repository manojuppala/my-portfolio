import React from "react";
import { useDocumentTitle } from "../utils";

const Opensource = () => {
  return (
    <React.Fragment>
      <p className="h5 text-primary" id="opensource">
        Open-source
      </p>
      <p className="text-light">
        Using Opensource software makes me happy. I love to contribute to
        valuable and accessible open source projects myself. An opensource
        project i have authored gained some recognition check it out{" "}
        <a href="https://github.com/manojuppala/tasklist-cli">tasklist-cli</a>.
      </p>
      <div className="card-deck" style={{ justifyContent: "center" }}>
        <a
          href="https://github.com/manojuppala"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="mb-2 embed-responsive"
            height="160em"
            src="https://github-readme-stats-git-master.manojuppala.vercel.app/api?username=manojuppala&show_icons=true&title_color=cdd9e5&icon_color=cdd9e5&text_color=cdd9e5&bg_color=22272e&hide_border=true"
            alt=""
          />
        </a>
        <a
          href="https://github.com/manojuppala"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="mb-2 embed-responsive"
            height="160em"
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=manojuppala&layout=compact&title_color=cdd9e5&icon_color=cdd9e5&text_color=cdd9e5&bg_color=22272e&hide_border=true"
            alt=""
          />
        </a>
      </div>
    </React.Fragment>
  );
};

export default Opensource;
