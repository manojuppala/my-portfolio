const Image = ({
  src,
  alt = "image",
  className,
}: {
  src: string;
  alt?: string;
  className?: string;
}) => {
  console.log({ className });
  return (
    <div className="img-wrapper">
      <img src={src} alt={alt} className={className} />
    </div>
  );
};

export default Image;
