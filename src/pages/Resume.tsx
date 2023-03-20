import { Fragment } from "react";
import { Image, Link } from "../components";

function Resume() {
  return (
    <Fragment>
      <p className="h5 text-primary" id="resume">
        Resume
      </p>

      <p style={{ textAlign: "center" }}>
        <Link href="https://github.com/manojuppala/Manoj-Resume/blob/main/manoj_resume.pdf">
          <button type="button" className="btn btn-primary">
            Download
          </button>
        </Link>
      </p>
      <p style={{ textAlign: "center" }}>
        <Image
          src={`https://manoj-dev-portfolio.s3.amazonaws.com/resume/manoj_resume.jpg`}
          alt="manoj resume"
          className="resume"
        />
      </p>
      <p className="text-light">
        My resume is written in LaTeX. You can find the template{" "}
        <Link href="https://github.com/manojuppala/Manoj-Resume">here</Link>.
      </p>
    </Fragment>
  );
}

export default Resume;
