import React, { Component } from "react";
import { generatePalette } from "./colorHelpers";
import Palette from "./Palette";
import seedColors from "./seedColors";
export default class App extends Component {
	render() {
		console.log(generatePalette(seedColors[4]));

		return (
			<>
				<Palette palette={generatePalette(seedColors[4])} />
			</>
		);
	}
}
