import { Link } from "@reach/router";
import React from "react";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";

TimeAgo.addDefaultLocale(en);

const Video = (props) => {
  const timeAgo = new TimeAgo("en-us");
  const dateAdded = new Date(props.dateAdded);
  return (
    <Link to={`/watch/${props.id}`} className="video-container">
      <img src={props.thumbnail.url} alt="" />
      <div className="video-info">
        <h2>{props.title}</h2>
        <span>{timeAgo.format(dateAdded)}</span>
        <span>{props.channel}</span>
        <p>{props.description}</p>
      </div>
    </Link>
  );
};

export default Video;
