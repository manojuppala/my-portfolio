import { ReactNode } from "react";

const Link = ({
  href,
  className,
  children,
}: {
  href?: string;
  className?: string;
  children: ReactNode;
}) => {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
      {children}
    </a>
  );
};

export default Link;
