import React, { Component } from 'react';

const  VideoList = (props) => {
    console.log(props.videos);
    return (
        <ul className="col-md-4 list-group">
            {props.videos.length}
        </ul>
    )
};

export default VideoList;