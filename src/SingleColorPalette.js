import React, { useState } from "react";
import {Link} from "react-router-dom"
import ColorBox from "./ColorBox";
import Navbar from "./Navbar";
import PaletteFooter from "./PaletteFooter";
import { createUseStyles } from "react-jss";
const useStyles = createUseStyles({
	Palette: {
		height: "100vh",
		display: "flex",
		flexDirection: "column",
	},
  ColorBox: {
    width: "20%",
    height: "50%",
    margin: "0 auto",
    display: "inline-block",
    position: "relative",
    marginBottom: "-3.5px",
    "&:hover": {
      opacity: "1",
      transition: "0.5s",
    },
    "&back-button":{
      backgroundColor: "black",
    }
  },
	PaletteColors: {
		height: "90%",
	},
	PaletteFooter: {
		backgroundColor: "white",
		height: "5hv",
		display: "flex",
		justifyContent: "flex-end",
		alignItems: "center",
		fontWeight: "bold",
	},
	emoji: {
		fontSize: "1.5rem",
		margin: "1rem 0",
	},
  backButton: {
    width: "20%",
    height: "50%",
    margin: "0 auto",
    display: "inline-block",
    position: "relative",
    marginBottom: "-3.5px",
    opacity: "1",
    backgroundColor: "black"
  }
});

export default function SingleColorPalette(props) {
	const classes = useStyles();
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
