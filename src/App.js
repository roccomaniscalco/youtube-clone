const Video = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h2", {}, props.title),
    React.createElement("h3", {}, props.dateAdded),
    React.createElement("h3", {}, props.channel),
  ]);
};

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
