import React from "react";

const Video = (props) => {
  return (
    <div className="video-container">
      <div className="img-container">
        <img src={props.thumbnail.url} alt="" />
      </div>
      <div className="video-info">
        <h2>{props.title}</h2>
        <h3>{props.dateAdded}</h3>
        <h3>{props.channel}</h3>
        <p>{props.description}</p>
      </div>
    </div>
  );
};

export default Video;
