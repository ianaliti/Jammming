import React from "react";

const SearchBar = ({...props}) => {

    return (
        <div className="search-bar">
            <input {...props} type='text' className="search-input" />
        </div>
    );
};

export default SearchBar;