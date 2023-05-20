import * as React from "react";
import { Route, Routes, useParams } from "react-router-dom";
import { generatePalette } from "./colorHelpers";
import Palette from "./Palette";
import seedColors from "./seedColors";
import PaletteList from "./PaletteList";
import SingleColorPalette from "./SingleColorPalette";
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
			<Route path="/" element={<PaletteList palettes={seedColors} />} />
			<Route path="/palette/:id" element={<Pal />} />
			<Route
				path="/palette/:paletteId/:colorId"
				element={<SingleColorPalette />}
			/>
		</Routes>
	);
}
