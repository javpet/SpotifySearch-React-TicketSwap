import React from "react";
import ListItem from "./ListItem";
import ListItemActive from "./ListItemActive";

class TabSelector extends React.Component {
	render() {
		return (
			<div className="tab-selector">
				<ListItemActive title="Tracks" />
				<ListItem title="Artists" />
				<ListItem title="Albums" />
			</div>
		);
	}
}

export default TabSelector;
