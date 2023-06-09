import React, { useState } from "react";
import {Link} from "react-router-dom"
import ColorBox from "./ColorBox";
import styles from "./styles/PaletteStyles"
import Navbar from "./Navbar";
import PaletteFooter from "./PaletteFooter";
import { createUseStyles } from "react-jss";
const useStyles = createUseStyles(styles);

export default function SingleColorPalette(props) {
	const classes = useStyles(props);
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
      showingFullPalette={false}
      name={color.name}
      background={color[format]}
    />
  ));
  return (
    <div className={classes.Palette}>
      <Navbar handleChange={changeColorFormat} showingAllColors={false} />
      <div className={classes.PaletteColors}>
        {colorBoxes}
        <div className={classes.backButton}>
          <Link to={`/palette/${props.palette.id}`} className="back-button">GO BACK</Link>
        </div>
      </div>
      <PaletteFooter
        paletteName={props.palette.paletteName}
        emoji={props.palette.emoji}
      />
    </div>
  );
}
