import React, { Component } from "react";
import Slider, { Range } from "rc-slider";
import { Link } from "react-router-dom";
import { Snackbar, Select, MenuItem, IconButton } from "@mui/material";

import { Close as CloseIcon } from "@mui/icons-material";
import "rc-slider/assets/index.css";
import "./Navbar.css";

export default class Navbar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			format: "hex",
			open: false,
		};
		this.handleFormatChange = this.handleFormatChange.bind(this);
		this.closeSnackbar = this.closeSnackbar.bind(this);
	}
	handleFormatChange(e) {
		this.setState({ format: e.target.value, open: true });
		this.props.handleChange(this.state.format);
	}
	closeSnackbar() {
		this.setState({
			open: false,
		});
	}
	render() {
		const { level, changeLevel, handleChange } = this.props;
		const { format } = this.state;
		return (
			<header className="Navbar">
				<div className="logo">
					<Link to="/">reactcolorpicker</Link>
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
					<Select value={format} onChange={this.handleFormatChange}>
						<MenuItem value="hex">HEX - #ffffff</MenuItem>
						<MenuItem value="rgb">RGB - rgb (255, 255, 255)</MenuItem>
						<MenuItem value="rgba">RGBA - rgb (255, 255, 255, 1.0)</MenuItem>
					</Select>
				</div>
				<Snackbar
					anchorOrigin={{
						vertical: "bottom",
						horizontal: "left",
					}}
					open={this.state.open}
					color="inherit"
					autoHideDuration={3000}
					message=<span id="message-id">
						Format changed to: {format.toUpperCase()}
					</span>
					ContentProps={{ "aria-describedby": "message-id" }}
					action={[
						<IconButton
							onClick={this.closeSnackbar}
							color="inherit"
							key="close"
							aria-label="close"
						>
							<CloseIcon />
						</IconButton>,
					]}
				></Snackbar>
			</header>
		);
	}
}
