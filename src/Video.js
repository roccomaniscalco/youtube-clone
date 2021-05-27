import React from "react";

const Video = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h2", {}, props.title),
    React.createElement("h3", {}, props.dateAdded),
    React.createElement("h3", {}, props.channel),
  ]);
};

export default Video;
