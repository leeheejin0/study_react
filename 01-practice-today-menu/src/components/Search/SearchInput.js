import React from "react";

import './SearchInput.css';

const SearchInput = () => {
    return (
        <div className="searchInputBx">
            <span className="searchInputTxt">검색</span>
            <input type="text" className="searchInput" placeholder="식당 이름"></input>
        </div>
    );
};

export default SearchInput;