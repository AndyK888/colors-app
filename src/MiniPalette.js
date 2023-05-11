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
		backgroundColor: "grey",
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
});
export default function MiniPalette(props) {
	const { paletteName, emoji } = props;
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<div className={classes.colors}></div>
			<h5 className={classes.title}>
				{paletteName} <span className={classes.emoji}>{emoji}</span>
			</h5>
		</div>
	);
}
