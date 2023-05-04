import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import { generatePalette } from "./colorHelpers";
import Palette from "./Palette";
import seedColors from "./seedColors";
export default class App extends Component {
	render() {
		return (
			<Routes>
				<Route exact path="/" Component={() => <h1>1</h1>} />
				<Route
					exact
					path="/palette/:id"
					Component={() => <h1>Individual palette</h1>}
				/>
			</Routes>

			// <>
			// 	<Palette palette={generatePalette(seedColors[4])} />
			// </>
		);
	}
}
