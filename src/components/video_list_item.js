import React from 'react';

const VideoListItem = ({ video, onVideoClick }) => {
    const imageUrl = video.snippet.thumbnails.default.url;
    
    return (
        <li onClick={() => onVideoClick(video)} className="list-group-item" style={{cursor: 'pointer'}}>
            <div className="video-list media">
                <div className="medial-left">
                    <img className="media-object" src={imageUrl} alt="" />
                </div>
                
                <div className="media-body">
                    <div className="media-heading">{video.snippet.title}</div>
                </div>
            </div>
        </li>
    );
};

export default VideoListItem;