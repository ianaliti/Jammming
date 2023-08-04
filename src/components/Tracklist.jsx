import React from "react";

const Tracklist = ({children, ...props}) => {

    return (
        <div className="track_list">
            {children}
        </div>
    );
};

export default Tracklist;