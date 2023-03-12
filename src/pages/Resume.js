import React from "react";

function Resume() {
  return (
    <React.Fragment>
      <p className="h5 text-primary" id="resume">
        Resume
      </p>

      <p align="center">
        <a href="https://github.com/manojuppala/Manoj-Resume/blob/main/manoj_resume.pdf">
          <button type="button" className="btn btn-primary">
            Download
          </button>
        </a>
      </p>
      <p align="center">
        <img
          src={`https://manoj-dev-portfolio.s3.amazonaws.com/resume/manoj_resume.jpg`}
          alt="manoj resume"
          style={{ width: "100%", maxWidth: "30rem", borderRadius: "5px" }}
        />
      </p>
      <p className="text-light">
        My resume is written in LaTeX. You can find the template{" "}
        <a href="https://github.com/manojuppala/Manoj-Resume">here</a>.
      </p>
    </React.Fragment>
  );
}

export default Resume;
