import React, { useState } from "react";
import "./SearchBar.css";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import HomeSharpIcon from "@mui/icons-material/HomeSharp";

let timeout = null;

function SearchBar(props) {
  const [state, setState] = useState("");

  const doSearch = (event) => {
    setState(event.target.value);
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      props.callback(state);
    }, 500);
  };

  return (
    <>
      <div className="rmdb-searchbar">
        <div className="rmdb-searchbar-content">
          <SearchRoundedIcon className="SearchRoundedIcon" />
          <input
            type="text"
            className="rmdb-searchbar-input"
            placeholder="Search"
            onChange={doSearch}
            value={state}
          />
        </div>
        <HomeSharpIcon className="HomeSharpIcon" sx={{ fontSize: 30 }} />
      </div>
    </>
  );
}

export default SearchBar;