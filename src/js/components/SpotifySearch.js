import React from "react";
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";
import spotifyApi from "../utils/spotify";
import _ from "lodash";

class SpotifySearch extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			tracks: []
		};

		// this.trackSearch("Eminem");
	}

	trackSearch(term) {
		spotifyApi.searchTracks(`artist:${term}`, { limit: 5 }).then(
			data => {
				this.setState({ tracks: data.tracks.items });
			},
			err => {
				console.error("There is an issue with calling the Spotify API :/ ");
			}
		);
	}

	render() {
		const trackSearch = _.debounce(term => {
			this.trackSearch(term);
		}, 300);

		return (
			<div className="main-container">
				<SearchBar onSearchTermChange={term => this.trackSearch(term)} />
				<SearchResults tracks={this.state.tracks} />
			</div>
		);
	}
}

export default SpotifySearch;
