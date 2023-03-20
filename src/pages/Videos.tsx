import { Fragment } from "react";
import { Link } from "../components";

function Videos() {
  return (
    <Fragment>
      <p className="h5 text-primary">Videos</p>
      <p className="text-light">
        I used to make programming tutorials on{" "}
        <Link href="https://www.youtube.com/@manojuppala">YouTube</Link> and{" "}
        <Link href="https://odysee.com/@thedataguy:7">Odysee</Link>, But for some reason i don't
        anymore. Check out the videos on my channel (pardon my video editing skills). I am open for
        suggestions and video ideas.
      </p>
      {/* <Video id="4pGz01s_OZs" /> */}
    </Fragment>
  );
}

export default Videos;
