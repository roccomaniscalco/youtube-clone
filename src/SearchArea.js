import React, { useState } from "react";

const searchArea = () => {
  const [keyword, setKeyword] = useState("Soccer");

  return (
    <div className="">
      <form>
        <label htmlFor="keyword">
          Search
          <input
            type="text"
            id="keyword"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
          />
          <button>Submit</button>
        </label>
      </form>
    </div>
  );
};

export default searchArea;
