import Pallete from "./Pallete";

import seedColors from "./seedColors";

import React, { Component } from "react";

export default class App extends Component {
	render() {
		return (
			<>
				<Pallete {...seedColors[4]} />
			</>
		);
	}
}
