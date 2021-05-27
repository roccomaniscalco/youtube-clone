import React from "react";
import ReactDOM from "react-dom";
import Video from "./Video";

const App = () => {
  return (
    <div>
      <h1>WeTube</h1>
      <Video
        title="The Best Video Ever"
        dateAdded="09/27/2001"
        channel="Rocco"
      />
      <Video
        title="The Coolest Video Ever"
        dateAdded="2 days ago"
        channel="Ema"
      />
    </div>
  );
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
