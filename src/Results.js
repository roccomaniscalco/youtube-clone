import React from "react";
import Video from "./Video";

const Results = ({ videos }) => {
  return (
    <div className="results">
      {videos.map((video) => {
        return (
          <Video
            key={video.id.videoId}
            thumbnail={video.snippet.thumbnails.medium}
            title={video.snippet.title}
            dateAdded={video.snippet.publishedAt}
            channel={video.snippet.channelTitle}
            description={video.snippet.description}
            id={video.id.videoId}
          ></Video>
        );
      })}
    </div>
  );
};

export default Results;
