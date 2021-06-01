import React from "react";
import ReactDOM from "react-dom";
import SearchArea from "./SearchArea";
import Results from "./Results";

const App = () => {
  return (
    <>
      <SearchArea></SearchArea>
    </>
  );
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
