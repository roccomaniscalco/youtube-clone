import { Link } from "@reach/router";
import React from "react";

const Video = (props) => {
  return (
    <Link to={`/watch/${props.id}`} className="video-container">
      <img src={props.thumbnail.url} alt="" />
      <div className="video-info">
        <h2>{props.title}</h2>
        <span>{props.dateAdded}</span>
        <span>{props.channel}</span>
        <p>{props.description}</p>
      </div>
    </Link>
  );
};

export default Video;
