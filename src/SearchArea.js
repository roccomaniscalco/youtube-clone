import React, { useState } from "react";
import Results from "./Results";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import axios from "axios";

const searchArea = () => {
  const [keyword, setKeyword] = useState("search");
  const [videos, setVideos] = useState([]);

  const requestSearch = () => {
    axios
      .get(
        `https://youtube.googleapis.com/youtube/v3/search?type=video&q=${keyword}&part=snippet&maxResults=25&key=${process.env.API_KEY}`
      )
      .then((res) => {
        const { items } = res.data;
        console.log(items);
        setVideos(items);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <header>
        <h1>WeTube</h1>
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
