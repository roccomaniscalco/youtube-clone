import React from "react";
import ReactDOM from "react-dom";
import {Router} from "@reach/router"

import SearchArea from "./SearchArea";
import WatchArea from "./WatchArea";

const App = () => {
  return (
    <>
      <Router>
        <SearchArea path="/" />
        <WatchArea path="/watch/:id"/>
      </Router>
    </>
  );
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
