const Video = ({ id }: { id: string }) => {
  return (
    <div
      className="embed-responsive embed-responsive-16by9"
      style={{ maxWidth: "750px", margin: "auto", marginBottom: "10px" }}
    >
      <iframe
        title="youtube-video"
        className="embed-responsive-item"
        src={`https://www.youtube.com/embed/${id}?rel=0&fs=0&modestbranding=1&loop=1`}
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Video;
