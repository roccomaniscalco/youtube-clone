import React, { useState, useEffect, useContext } from "react";
import { Link } from "@reach/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisV, faSearch } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import Results from "./Results";
import * as AppConstant from "./AppConstant";
import useDropdown from "./useDropdown";
import ColorContext from "./ColorContext";

const searchArea = () => {
  const [keyword, setKeyword] = useState("search");
  const [videos, setVideos] = useState([]);
  const [checked, setChecked] = useState(false);
  const [themeColor, setThemeColor] = useContext(ColorContext);

  const orderList = ["date", "relevance", "rating", "title"];
  const [order, OrderDropdown] = useDropdown(
    "Order By",
    "relevance",
    orderList
  );

  const safeSearchList = ["moderate", "none", "strict"];
  const [safeSearch, SafeSearchDropdown] = useDropdown(
    "Safe Search",
    "none",
    safeSearchList
  );

  const [advancedParams, setAdvancedParams] = useState(``);
  useEffect(() => {
    if (checked) {
      setAdvancedParams(`&order=${order}&safeSearch=${safeSearch}`);
    } else {
      setAdvancedParams(``);
    }
  }, [checked, order, safeSearch]);

  const requestSearch = () => {
    axios
      .get(`${AppConstant.SEARCH_URL}${advancedParams}&q=${keyword}`)
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
              <button
                aria-label="search"
                style={{ backgroundColor: themeColor }}
              >
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
              <FontAwesomeIcon icon={faEllipsisV} id="advanced-toggle-icon" />
            </label>
          </div>

          {checked ? (
            <div id="advanced-options">
              <OrderDropdown></OrderDropdown>
              <SafeSearchDropdown></SafeSearchDropdown>
              <label htmlFor="themeColor">
                <span className="dropdown-label">Theme Color</span>
                <select
                  value={themeColor}
                  id="themeColor"
                  onChange={(e) => setThemeColor(e.target.value)}
                  onBlur={(e) => setThemeColor(e.target.value)}
                >
                  <option value="#cfcfcf">Light Grey</option>
                  <option value="#f1f1f1">White</option>
                  <option value="#bd6baf">Violet</option>
                </select>
              </label>
            </div>
          ) : null}
        </form>
      </header>
      <Results videos={videos} />
    </div>
  );
};

export default searchArea;
