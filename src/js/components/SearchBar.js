import React from "react";

class SearchBar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			searchText: ""
		};
	}

	onInputChange(term) {
		this.setState({
			searchText: term
		});
	}

	onSubmitChange(event) {
		this.props.onSearchTermChange(this.state.searchText);
		event.preventDefault();
	}

	render() {
		return (
			<div className="search-bar">
				<form id="searchForm" onSubmit={event => this.onSubmitChange(event)}>
					<div className="search-icon" />
					<input
						className="input-textfield"
						type="text"
						value={this.state.searchText}
						placeholder="Search tracks, artists and albums..."
						onChange={event => this.onInputChange(event.target.value)}
					/>
					<input form="searchForm" type="submit" value="Search" className="search-button" />
				</form>
			</div>
		);
	}
}

export default SearchBar;
