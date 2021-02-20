import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import "./Search.css";

function Search() {
  return (
    <div className="app__header-search">
      <form action="" className="app__header-form">
        <SearchIcon />
        <input
          type="search"
          placeholder="Search"
          className="app__header-input"
        />
      </form>
    </div>
  );
}

export default Search;
