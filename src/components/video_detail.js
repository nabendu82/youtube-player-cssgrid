import React from 'react';

const VideoDetail = (props) => {
    const video = props.video;

    if(!video){
        return <div>Loading...</div>;
    }

    const videoId = video.id.videoId;
    const url = `https://www.youtube.com/embed/${videoId}`;

    return (
        <div>
            <div>
                <iframe className="frame__item" src={url}></iframe>
            </div>
            <div>
                <div>{video.snippet.title}</div>
                <div>{video.snippet.description}</div>
            </div>
        </div>
    );
};

export default VideoDetail;