import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { createUseStyles } from "react-jss";
import MiniPalette from "./MiniPalette";

const useStyles = createUseStyles({
	root: {
		backgroundColor: "blue",
		height: " 100%",
		display: "flex",
		alignItems: "flex-start",
		justifyContent: "center",
		height: "100vh",
	},
	container: {
		width: "50%",
		display: "flex",
		alignItems: "flex-start",
		flexDirection: "column",
		flexWrap: "wrap",
	},
	nav: {
		display: "flex",
		width: "100%",
		justifyContent: "space-between",
		color: "white",
	},
	palettes: {
		boxSizing: "border-box",
		width: "100%",
		display: "grid",
		gridTemplateColumns: "repeat(3, 30%)",
		gridGap: "5%",
	},
});

export default function PaletteList(props) {
	const navigate = useNavigate();
	function goToPalette(id) {
		navigate(`/palette/${id}`, { replace: true });
	}
	const { palettes } = props;
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<div className={classes.container}>
				<nav className={classes.nav}>
					<h1>React Colors</h1>
				</nav>
				<div className={classes.palettes}>
					{palettes.map((palette) => {
						return (
							<MiniPalette
								key={palette.id}
								handleClick={() => goToPalette(palette.id)}
								{...palette}
							/>
						);
					})}
				</div>
			</div>
		</div>
	);
}
