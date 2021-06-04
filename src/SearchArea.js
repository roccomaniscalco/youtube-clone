import React, { useState } from "react";
import { Link } from "@reach/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import Results from "./Results";
import * as AppConstant from "./AppConstant";

const searchArea = () => {
  const [keyword, setKeyword] = useState("search");
  const [videos, setVideos] = useState([]);

  const requestSearch = () => {
    axios
      .get(`${AppConstant.SEARCH_URL}&q=${keyword}`)
      .then((res) => {
        const { items } = res.data;
        setVideos(items);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <header>
        <Link to="/" className="logo">
          <h1>WeTube</h1>
        </Link>
        <form
          className="search-area"
          onSubmit={(e) => {
            e.preventDefault();
            requestSearch();
          }}
        >
          <input
            type="text"
            id="keyword"
            aria-label="keyword"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
          />
          <button aria-label="search">
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </form>
      </header>
      <Results videos={videos} />
    </div>
  );
};

export default searchArea;
