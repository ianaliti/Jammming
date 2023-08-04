import React from "react";
import classes from './SearchButton.module.css'

const SearchButton = ({children, ...props}) => {

    return (
        <div>
            <button {...props} className={classes.myBtn}>{children}</button>
        </div>
    );
};

export default SearchButton;