import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {
    // use map instead of for loop in javascript to avoid typo
    const videoItems = props.videos.map((video) => {
        // add id to our each piece of data
        return (
            <VideoListItem
                onVideoSelect = {props.onVideoSelect}
                key = {video.etag}
                video = {video} />
        );
    });


    return (
        // className --> bootstrap syntax
        <ul className = "col-md-4 list-group">
            {videoItems}
        </ul>
    );
};


export default VideoList;
