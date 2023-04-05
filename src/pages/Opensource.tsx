import { Fragment } from "react";
import { Link } from "../components";

const Opensource = () => {
  return (
    <Fragment>
      <p className="h5 text-primary" id="open-source">
        Open-source
      </p>
      <p className="text-light">
        Using Opensource software makes me happy. I love to contribute to valuable and accessible
        open source projects myself. An opensource project i have authored gained some recognition
        check it out <Link href="https://github.com/manojuppala/tasklist-cli">tasklist-cli</Link>.
      </p>
      <div className="card-deck" style={{ justifyContent: "center" }}>
        <Link href="https://github.com/manojuppala">
          <img
            className="mb-2 embed-responsive"
            height="160em"
            src="https://github-readme-stats-git-master.manojuppala.vercel.app/api?username=manojuppala&show_icons=true&title_color=cdd9e5&icon_color=cdd9e5&text_color=cdd9e5&bg_color=22272e&hide_border=true"
            alt="github-stats"
          />
        </Link>
        <Link href="https://github.com/manojuppala">
          <img
            className="mb-2 embed-responsive"
            height="160em"
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=manojuppala&layout=compact&title_color=cdd9e5&icon_color=cdd9e5&text_color=cdd9e5&bg_color=22272e&hide_border=true"
            alt="githubstats"
          />
        </Link>
      </div>
    </Fragment>
  );
};

export default Opensource;
