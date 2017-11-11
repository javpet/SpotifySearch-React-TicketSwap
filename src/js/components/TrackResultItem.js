import React from "react";
import PlayIcon from "./PlayIcon";

const TrackResultItem = props => {
	const albumArtwork = {
		backgroundImage: `url(${props.tracks.album.images[1].url})`,
		borderRadius: "100%"
	};

	return (
		<div className="track-container">
			<div className="track-artwork" style={albumArtwork}>
				<div className="track-artwork-overlay" />
				<PlayIcon />
				<div className="artist-cover" />
			</div>
			<div className="track-details">
				<p className="track-title">{props.tracks.name}</p>
				<h3 className="artist-name">{props.tracks.artists[0].name}</h3>
			</div>
		</div>
	);
};

export default TrackResultItem;
