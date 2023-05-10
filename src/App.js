import * as React from "react";
import { Route, Routes, useParams } from "react-router-dom";
import { generatePalette } from "./colorHelpers";
import Palette from "./Palette";
import seedColors from "./seedColors";

function findPalette(id) {
	return seedColors.find((color) => color.id === id);
}

function Pal() {
	const { id } = useParams();
	return <Palette palette={generatePalette(findPalette(id))} />;
}

export default function App() {
	return (
		<Routes>
			<Route path="/" element={<h1>1</h1>} />
			<Route path="/palette/:id" element={<Pal />} />
		</Routes>

		// <>
		// 	<Palette palette={generatePalette(seedColors[4])} />
		// </>
	);
}
