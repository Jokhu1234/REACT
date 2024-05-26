import React from "react";

const SearchJob = ({ search, setSearch }) => {
  return (
   

<form className="searchForm" onSubmit={(e) => e.preventDefault()}>
      <label>Search Job</label>&nbsp;&nbsp;
      <input
        id="search"
        type="text"
        role="searchbox"
        placeholder="Search Jobs"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
  
      />
       
    </form>
  
  );
};

export default SearchJob;