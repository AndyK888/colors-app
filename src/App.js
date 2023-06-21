import * as React from "react";
import { useState } from "react";
import { Route, Routes, useParams, useNavigate } from "react-router-dom";
import { generatePalette } from "./colorHelpers";
import Palette from "./Palette";
import seedColors from "./seedColors";
import PaletteList from "./PaletteList";
import NewPaletteForm from "./NewPaletteForm";
import SingleColorPalette from "./SingleColorPalette";

export default function App(props) {
	const [palettes, setPalettes] = useState(seedColors)
	function findPalette(id) {
	  return palettes.find((color) => color.id === id);
	}
	function Pal() {
	  const { id } = useParams();
	  return <Palette palette={generatePalette(findPalette(id))} />;
	}
	function SinglePalette() {
	  const { paletteId, colorId } = useParams();
	  return (
		<SingleColorPalette
		  palette={generatePalette(findPalette(paletteId))}
		  colorId={colorId}
		/>
	  );
	}
  function savePalette(newPalette) {
	  setPalettes([...palettes, newPalette])
	  console.log(palettes);
  }
  return (
    <Routes>
      <Route path="/" element={<PaletteList palettes={palettes} />} />
      <Route
        path="/palette/new"
        element={
          <NewPaletteForm navHook={useNavigate()} savePalette={savePalette} palettes={palettes} />
        }
      />
      <Route path="/palette/:id" element={<Pal />} />
      <Route path="/palette/:paletteId/:colorId" element={<SinglePalette />} />
    </Routes>
  );
}
