const Image = ({
  src,
  alt = "image",
  className,
  center = false,
}: {
  src: string;
  alt?: string;
  className?: string;
  center?: boolean;
}) => {
  return (
    <div style={{ textAlign: center ? "center" : "start" }}>
      <div className="img-wrapper">
        <img src={src} alt={alt} className={className} />
      </div>
    </div>
  );
};

export default Image;
