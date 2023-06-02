import React from "react";
import { createUseStyles } from "react-jss";
import styles from "./styles/MiniPaletteStyles";
export default function MiniPalette(props) {
	const useStyles = createUseStyles(styles);
	const { paletteName, emoji, colors } = props;
	const classes = useStyles(props);
	const miniColorBoxes = colors.map((color) => {
		return (
			<div
				className={classes.miniColor}
				style={{ backgroundColor: color.color }}
				key={color.name}
			></div>
		);
	});
	return (
		<div className={classes.root} onClick={props.handleClick}>
			<div className={classes.colors}>{miniColorBoxes}</div>
			<h5 className={classes.title}>
				{paletteName} <span className={classes.emoji}>{emoji}</span>
			</h5>
		</div>
	);
}
