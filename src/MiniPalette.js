import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
	root: {
		backgroundColor: "white",
		borderRadius: "5px",
		border: "1px solid black",
		padding: "0.5rem",
		position: "relative",
		overflow: "hidden",
		"&:hover": {
			cursor: "pointer",
		},
	},
	colors: {
		backgroundColor: "lightgray",
		height: "150px",
		width: "100%",
		borderRadius: "5px",
		overflow: "hidden",
	},
	title: {
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
		margin: "0",
		color: "black",
		paddingTop: "0.5rem",
		fontSize: "1rem",
		position: "relative",
	},
	emoji: {
		marginLeft: "0.5rem",
		fontSize: "1.5rem",
	},
	miniColor: {
		width: "20%",
		height: "25%",
		display: "inline-block",
		marginLeft: "0 auto",
		position: "relative",
		marginBottom: "-3.5px",
	},
});
export default function MiniPalette(props) {
	const { paletteName, emoji, colors, id } = props;
	const classes = useStyles();
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
		<div className={classes.root}>
			<div className={classes.colors}>{miniColorBoxes}</div>
			<h5 className={classes.title}>
				{paletteName} <span className={classes.emoji}>{emoji}</span>
			</h5>
		</div>
	);
}
