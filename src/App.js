import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Router } from "@reach/router";

import SearchArea from "./SearchArea";
import WatchArea from "./WatchArea";

import ColorContext from "./ColorContext";

const App = () => {
  const themeColor = useState("#cfcfcf");

  return (
    <ColorContext.Provider value={themeColor}>
      <Router>
        <SearchArea path="/" />
        <WatchArea path="/watch/:id" />
      </Router>
    </ColorContext.Provider>
  );
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
