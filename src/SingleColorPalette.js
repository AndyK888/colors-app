import React, { useState } from "react";
import ColorBox from "./ColorBox";
import Navbar from "./Navbar";
import PaletteFooter from "./PaletteFooter";
export default function SingleColorPalette(props) {
  const [format, setFormat] = useState("hex");
  const _shades = gatherShades(props.palette, props.colorId);

  function gatherShades(palette, colorToFilterBy) {
    let shades = [];
    let allColors = palette.colors;
    for (let key in allColors) {
      shades = shades.concat(
        allColors[key].filter((color) => color.id === colorToFilterBy)
      );
    }
    return shades.slice(1);
  }
  function changeColorFormat(evt) {
		setFormat(evt);
	}
  const colorBoxes = _shades.map((color) => (
    <ColorBox
      key={color.hex}
      showLink={false}
      name={color.name}
      background={color[format]}
    />
  ));
  return (
    <div className="Palette">
      <Navbar handleChange={changeColorFormat} showingAllColors={false}/>
      <div className="Palette-colors">{colorBoxes}</div>
	  <PaletteFooter paletteName={props.palette.paletteName} emoji={props.palette.emoji}/>
    </div>
  );
}
