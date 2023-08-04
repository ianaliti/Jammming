import React from "react";

const Track = ({children, ...props}) => {

    return (
        <div className="track"> 
            <image src={props} alt='album' />
            <h2>{children}</h2>
        </div>
    );
};

export default Track;