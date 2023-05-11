import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
	main: {
		backgroundColor: "purple",
		border: "1px solid teal",
	},
});
export default function MiniPalette(props) {
	const classes = useStyles();
	return <h1 className={classes.main}>MiniPalette</h1>;
}
