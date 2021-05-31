import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faSearch } from '@fortawesome/free-solid-svg-icons'

const searchArea = () => {
  const [keyword, setKeyword] = useState("Soccer");

  return (
    <form className="search-area">
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
  );
};

export default searchArea;
