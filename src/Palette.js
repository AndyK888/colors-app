import React, { Component } from "react";
import Navbar from "./Navbar";
import ColorBox from "./ColorBox";
import "./Palette.css";

export default class Palette extends Component {
	constructor(props) {
		super(props);
		this.state = { level: 500, format: "hex" };
		this.changeLevel = this.changeLevel.bind(this);
		this.changeColorFormat = this.changeColorFormat.bind(this);
	}
	changeLevel(level) {
		this.setState({ level });
	}
	changeColorFormat(evt) {
		this.setState({ format: evt });
	}
	render() {
		const { colors } = this.props.palette;
		const { level, format } = this.state;
		const colorBoxes = colors[level].map((color) => (
			<ColorBox background={color[format]} name={color.name} />
		));
		return (
			<div className="Palette">
				<Navbar
					level={level}
					changeLevel={this.changeLevel}
					handleChange={this.changeColorFormat}
				/>
				<div className="Palette-colors">{colorBoxes}</div>
				{/* Footer */}
			</div>
		);
	}
}
