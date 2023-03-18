const Image = ({ src, alt = "image", style, className }) => {
  return (
    <div className="img-wrapper">
      <img src={src} alt={alt} className={className} style={style} />
    </div>
  );
};

export default Image;
