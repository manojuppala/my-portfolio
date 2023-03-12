import React from "react";
import { Video, Code } from "../components";

const Home = () => {
  return (
    <React.Fragment>
      <p align="center">
        <img
          src={`https://manoj-dev-portfolio.s3.amazonaws.com/sunset_image.jpg`}
          alt="Sunset image"
          style={{ width: "100%", maxWidth: "30rem", borderRadius: "5px" }}
        />
      </p>
      <blockquote>
        This is an image of a sunset clicked by me. I thought it looked cool.
      </blockquote>
      <p className="h5 text-primary" id="about">
        About
      </p>
      <p className="text-light">
        Hi i'm Manoj Uppala. A Open Source enthusiast and budding data scientist
        with deep interest in natural language processing, computer vision and
        machine learning. I am currently pursuing bachelors at Lovely
        professional university majoring in Computer science and Data science as
        my minor.
      </p>

      <Code
        snippet={`# this is hello world! 
int main(){
cout<<"hello world!";
return 0;
}`}
        lang="c"
      />
    </React.Fragment>
  );
};

export default Home;
