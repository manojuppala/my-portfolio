import { Link } from "./atoms";

const Footer = () => {
  const socials = [
    { name: "github", link: "https://github.com/manojuppala" },
    { name: "linkedin", link: "https://linkedin.com/in/manojuppala/" },
    { name: "youtube", link: "https://youtube.com/thedataguy" },
    { name: "stack-overflow", link: "https://stackoverflow.com/users/11874811/manoj" },
  ];
  return (
    <footer className="footer">
      <div className="footer-copyright text-center text-secondary py-3">
        <div className="container text-center">
          {socials.map(({ name, link }, id) => {
            return (
              <Link href={link} key={id} className="h5 pr-3 text-secondary">
                <i className={`fa fa-${name} fa-social`}></i>
              </Link>
            );
          })}
        </div>
        <span className="text-muted meta-data">
          {" "}
          © 2023 Copyright: <a href="https://manojuppala.com/">manojuppala.com</a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
