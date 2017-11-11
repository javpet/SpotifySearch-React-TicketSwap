import React from "react";
import TrackResultItem from "./TrackResultItem";

const TrackResult = props => {
	const trackResultItems = props.tracks.map(track => {
		return <TrackResultItem key={track.id} tracks={track} />;
	});

	return <div className="track-result">{trackResultItems}</div>;
};

export default TrackResult;
