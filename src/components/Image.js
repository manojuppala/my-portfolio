const Image = ({ src, alt = "image", style }) => {
  return <img src={src} alt={alt} style={style} />;
};

export default Image;
