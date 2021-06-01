import { Link } from "@reach/router";
import React from "react";

const Video = (props) => {
  return (
    <Link to={`/watch/${props.id}`} className="video-container">
      <img src={props.thumbnail.url} alt="" />
      <div className="video-info">
        <h2>{props.title}</h2>
        <h3>{props.dateAdded}</h3>
        <h3>{props.channel}</h3>
        <p>{props.description}</p>
      </div>
    </Link>
  );
};

export default Video;
