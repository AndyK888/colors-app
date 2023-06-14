import * as React from "react";
import { Route, Routes, useParams, useNavigate } from "react-router-dom";
import { generatePalette } from "./colorHelpers";
import Palette from "./Palette";
import seedColors from "./seedColors";
import PaletteList from "./PaletteList";
import NewPaletteForm from './NewPaletteForm'
import SingleColorPalette from "./SingleColorPalette";
function findPalette(id) {
	return seedColors.find((color) => color.id === id);
}

function Pal() {
	const { id } = useParams();
	return <Palette palette={generatePalette(findPalette(id))} />;
}
function SinglePalette() {
	const { paletteId, colorId } = useParams();
	return <SingleColorPalette  palette={generatePalette(findPalette(paletteId))} colorId={colorId}/>;
}

export default function App(props) {
	function savePalette(newPalette){
		console.log(newPalette)
	}
		return (
			<Routes>
			<Route path="/" element={<PaletteList palettes={seedColors} />} />
			<Route path="/palette/new" element={<NewPaletteForm navHook={useNavigate()} savePalette={savePalette}/>}/>
			<Route path="/palette/:id" element={<Pal />} />
			<Route
				path="/palette/:paletteId/:colorId"
				element={<SinglePalette />}
			/>
		</Routes>
		);
	
}
