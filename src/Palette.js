import React, { useState } from "react";
import { createUseStyles } from "react-jss";
import styles from "./styles/PaletteStyles"
import Navbar from "./Navbar";
import ColorBox from "./ColorBox";
import PaletteFooter from "./PaletteFooter";

const useStyles = createUseStyles(styles);

export default function Palette(props) {
	const [level, setLevel] = useState(500);
	const [format, setFormat] = useState("hex");
	const classes = useStyles();

	function changeLevel(level) {
		setLevel(level);
	}
	function changeColorFormat(evt) {
		setFormat(evt);
	}
	const { colors, paletteName, emoji, id } = props.palette;
	const colorBoxes = colors[level].map((color) => (
		<ColorBox
			background={color[format]}
			name={color.name}
			key={color.id}
			moreUrl={`/palette/${id}/${color.id}`}
			showingFullPalette={true}
		/>
	));

	return (
		<div className={classes.Palette}>
			<Navbar
				level={level}
				changeLevel={changeLevel}
				handleChange={changeColorFormat}
				showingAllColors={true}
			/>
			<div className={classes.PaletteColors}>{colorBoxes}</div>
			<PaletteFooter paletteName={paletteName} emoji={emoji}/>
		</div>
	);
}
