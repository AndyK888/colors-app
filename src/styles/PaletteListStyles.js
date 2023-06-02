/* eslint-disable import/no-anonymous-default-export */
export default {
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
}