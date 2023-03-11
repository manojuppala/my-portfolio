import React from "react";
import parse from "html-react-parser";
import { getDate } from "../utils";

const Post = ({ title, content, date }) => {
  return (
    <React.Fragment>
      <p className="h4 text-primary">{title}</p>
      {parse(content)}
      {/* <small className="text-muted">Updated on {getDate(date)}</small> */}
    </React.Fragment>
  );
};

export default Post;
