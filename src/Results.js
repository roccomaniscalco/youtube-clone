import React from "react";
import Video from "./Video";

const Results = ({ videos }) => {
  return (
    <div className="results">
      {videos.map((video) => {
        return (
          <Video
            key={video.id.videoId}
            title={video.snippet.title}
            dateAdded={video.snippet.publishedAt}
            channel={video.snippet.channelTitle}
          ></Video>
        );
      })}
    </div>
  );
};

export default Results;
