import React, { useState } from "react";
import { Link } from "react-router-dom";
import { createUseStyles } from "react-jss";
import { Close as CloseIcon } from "@mui/icons-material";
import { Snackbar, Select, MenuItem, IconButton } from "@mui/material";
import Slider from "rc-slider";

import styles from "./styles/NavbarStyles"
import "rc-slider/assets/index.css";

const useStyles = createUseStyles(styles);
export default function Navbar(props) {
  const [format, setFormat] = useState("hex");
  const [open, setOpen] = useState(false);
  const classes = useStyles(props);
  function handleFormatChange(e) {
    setOpen(true);
    setFormat(e.target.value);
  }
  function closeSnackbar() {
    setOpen(false);
  }
  const { level, changeLevel, showingAllColors } = props;
  return (
    <header className={classes.Navbar}>
      <div className={classes.logo}>
        <Link to="/">reactcolorpicker</Link>
      </div>
      {showingAllColors && (
        <div>
          <span>Level: {level}</span>
          <div className={classes.slider}>
            <Slider
              defaultValue={level}
              min={100}
              step={100}
              max={900}
              onChange={changeLevel}
            />
          </div>
        </div>
      )}

      <div className={classes.selectContainer}>
        <Select value={format} onChange={handleFormatChange}>
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
        open={open}
        color="inherit"
        autoHideDuration={3000}
        message=<span id="message-id">
          Format changed to: {format.toUpperCase()}
        </span>
        ContentProps={{ "aria-describedby": "message-id" }}
        action={[
          <IconButton
            onClick={closeSnackbar}
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
