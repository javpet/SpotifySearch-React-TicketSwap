import React from "react";
import TabSelector from "./TabSelector";
import TrackResult from "./TrackResult";
import LoadMore from "./LoadMore";

const SearchResults = props => {
	return (
		<div className="search-result">
			<TabSelector />
			<TrackResult tracks={props.tracks} />
			<LoadMore />
		</div>
	);
};

export default SearchResults;
