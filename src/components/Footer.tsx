import { Link } from "./atoms";

type FooterType = {
  socials?: {
    github?: string;
    linkedin?: string;
    youtube?: string;
    stackoverflow?: string;
  };
  copyright?: string;
};

const Footer = ({ footerObj }: { footerObj: FooterType }) => {
  const socials = footerObj?.socials ?? {};
  const copyright = footerObj?.copyright;
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-copyright text-center text-secondary py-3">
        {Object.keys(socials).length !== 0 ? (
          <div className="container text-center">
            {Object.keys(socials).map((social, id) => {
              return (
                <Link
                  href={socials[social as keyof typeof socials]}
                  key={id}
                  className="h5 pr-3 text-secondary"
                >
                  <i className={`fa fa-${social} fa-social`}></i>
                </Link>
              );
            })}
          </div>
        ) : null}
        {copyright ? (
          <span className="text-muted meta-data">
            {" "}
            © {year} Copyright: <a href={"https://" + copyright}>{copyright}</a>
          </span>
        ) : null}
      </div>
    </footer>
  );
};

export default Footer;
