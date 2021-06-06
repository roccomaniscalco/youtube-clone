import React, { useState } from "react";
import { Link } from "@reach/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog, faSearch, faSlidersH } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import Results from "./Results";
import * as AppConstant from "./AppConstant";
import useDropdown from "./useDropdown";

const searchArea = () => {
  const [keyword, setKeyword] = useState("search");
  const [videos, setVideos] = useState([]);
  const orderList = ["date", "relevance", "rating"];
  const [order, OrderDropdown] = useDropdown(
    "Order By",
    "relevance",
    orderList
  );

  const [safeSearch, SafeSearchDropdown] = useDropdown("Safe Search", "none", [
    "moderate",
    "none",
    "strict",
  ]);
  const [checked, setChecked] = useState(false);

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
          onSubmit={(e) => {
            e.preventDefault();
            requestSearch();
          }}
        >
          <div id="search-bar-container">
            <div id="search-bar">
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
            </div>

            <label
              htmlFor="advanced-toggle"
              className={checked ? "checked" : "unchecked"}
            >
              <input
                type="checkbox"
                id="advanced-toggle"
                checked={checked}
                onChange={(e) => setChecked(!checked)}
              ></input>
              <FontAwesomeIcon icon={faCog} id="advanced-toggle-icon"/>
            </label>
          </div>

          {checked ? (
            <div id="advanced-options">
              <OrderDropdown></OrderDropdown>
              <SafeSearchDropdown></SafeSearchDropdown>
            </div>
          ) : null}
        </form>
      </header>
      <Results videos={videos} />
    </div>
  );
};

export default searchArea;
