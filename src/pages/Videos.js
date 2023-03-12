import React from "react";
import { Input } from "../components/atoms";

function Videos() {
  return (
    <React.Fragment>
      <p className="h5 text-primary">Videos</p>
      <p className="text-light">
        I used to make programming tutorials on{" "}
        <a href="https://www.youtube.com/@manojuppala">YouTube</a> and{" "}
        <a href="https://odysee.com/@thedataguy:7">Odysee</a>, But for some
        reason i don't anymore. Check out the videos on my channel (pardon my
        video editing skills). I am open for suggestions and video ideas.
      </p>
      {/* <Video id="4pGz01s_OZs" /> */}
    </React.Fragment>
  );
}

export default Videos;
