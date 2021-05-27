import React from "react"
import ReactDOM from "react-dom"
import Video from "./Video";

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "WeTube"),
    React.createElement(Video, {
      title: "The Best Video Ever",
      dateAdded: "4 days ago",
      channel: "News Channel",
    }),
    React.createElement(Video, {
      title: "The Coolest Video Ever",
      dateAdded: "1 day ago",
      channel: "Cool Channel",
    }),
  ]);
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
