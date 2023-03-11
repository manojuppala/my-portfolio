import { Badge } from "./atoms";
import image from "../assets/images/articles/image.jpeg";

const ArticleCard = ({ title, preview, platform, date, tags }) => {
  const url = "file://../assets/images/articles/image.jpeg";
  return (
    <div className="card text-white bg-dark mb-3 cards-fixed-width card-border anchor-div">
      <div>
        <img className="card-img-top" src={image} alt="Card cap" />
      </div>
      <div className="card-body">
        <h5 className="card-title text-primary">
          <b>{title}</b>
        </h5>
        <p className="card-text text-light">
          {` I have been using linux since the last 3 years. I've used ubuntu for a year and then
          switched to linux mint. linux is really calm and peaceful.`}{" "}
          <a className="text-primary" href="{{ article.link }}">
            Read more
          </a>
        </p>
        <div className="d-flex justify-content-between align-items-center">
          <small className="text-muted">Aug 18, 2020 • 2min read</small>
          <div>
            {tags.map((tag, id) => {
              return <Badge key={id} text={tag} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
