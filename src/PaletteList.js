import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { createUseStyles } from "react-jss";
import MiniPalette from "./MiniPalette";
import styles from "./styles/PaletteListStyles"
const useStyles = createUseStyles(styles);

export default function PaletteList(props) {
	const navigate = useNavigate();
	function goToPalette(id) {
		navigate(`/palette/${id}`, { replace: true });
	}
	const { palettes } = props;
	const classes = useStyles(props);
	return (
		<div className={classes.root}>
			<div className={classes.container}>
				<nav className={classes.nav}>
					<h1>React Colors</h1>
					<Link to="/palette/new">Create Palette</Link>
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
