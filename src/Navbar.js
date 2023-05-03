import React, { Component } from "react";
import Slider, { Range } from "rc-slider";
import { Select, MenuItem } from "@mui/material";
import "rc-slider/assets/index.css";
import "./Navbar.css";

export default class Navbar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			format: "hex",
		};
		this.handleChange = this.handleChange.bind(this);
	}
	handleChange(e) {
		this.setState({ format: e.target.value });
		this.props.handleChange(this.state.format);
	}
	render() {
		const { level, changeLevel, handleChange } = this.props;
		const { format } = this.state;
		return (
			<header className="Navbar">
				<div className="logo">
					<a href="#">reactcolorpicker</a>
				</div>
				<div className="slider-container">
					<span>Level: {level}</span>
					<div className="slider">
						<Slider
							defaultValue={level}
							min={100}
							step={100}
							max={900}
							onChange={changeLevel}
						/>
					</div>
				</div>
				<div className="select-container">
					<Select value={format} onChange={this.handleChange}>
						<MenuItem value="hex">HEX - #ffffff</MenuItem>
						<MenuItem value="rgb">RGB - rgb (255, 255, 255)</MenuItem>
						<MenuItem value="rgba">RGBA - rgb (255, 255, 255, 1.0)</MenuItem>
					</Select>
				</div>
			</header>
		);
	}
}
