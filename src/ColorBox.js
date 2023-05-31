import React, { useState } from "react";
import chroma from "chroma-js";
import { Link } from "react-router-dom";
import { CopyToClipboard } from "react-copy-to-clipboard";
import "./ColorBox.css";
import { createUseStyles } from "react-jss";
export default function ColorBox(props) {
  const { name, background, moreUrl, showingFullPalette } = props;
  const useStyles = createUseStyles({
    ColorBox: {
      width: "20%",
      height: (props) => (props.showingFullPalette ? "25%" : "50%"),
      margin: "0 auto",
      display: "inline-block",
      position: "relative",
      marginBottom: "-3.5px",
      "&hover": {
        opacity: "1",
        transition: "0.5s",
      },
    },
    copyText: {
      color: (props) =>
        chroma(props.background).luminance() >= 0.7 ? "black" : "white",
    },
    colorName: {
      color: (props) =>
        chroma(props.background).luminance() <= 0.3 ? "white" : "black",
    },
    seeMore: {
      color: (props) =>
        chroma(props.background).luminance() >= 0.7 ? "black" : "white",
      background: "rgba(255, 255, 255, 0.3)",
      position: "absolute",
      border: "none",
      right: "0px",
      bottom: "0px",
      width: "60px",
      height: "30px",
      textAlign: "center",
      lineHeight: "30px",
      textTransform: "uppercase",
    },
    copyButton: {
      color: (props) =>
        chroma(props.background).luminance() >= 0.7 ? "black" : "white",
      width: "100px",
      height: "30px",
      position: "absolute",
      display: "inline-block",
      top: "50%",
      left: "50%",
      marginLeft: "-50px",
      marginTop: "-15px",
      textAlign: "center",
      outline: "none",
      background: "rgba(255, 255, 255, 0.3)",
      fontSize: "1rem",
      lineHeight: "30px",
      textTransform: "uppercase",
      border: "none",
      textDecoration: "none",
      opacity: "0",
    },
    boxContent: {
      position: "absolute",
      width: "100%",
      left: "0px",
      padding: "10px",
      bottom: "0px",
      color: "black",
      letterSpacing: "1px",
      textTransform: "uppercase",
      fontSize: "12px",
    },
    copyOverlay: {
      opacity: 0,
      zIndex: 0,
      width: 100,
      height: 100,
      transition: "transform 0.6s ease-in-out",
      transform: "scale(0.1)",
    },
    showOverlay: {
      opacity: 1,
      transform: "scale(50)",
      zIndex: 10,
      position: "absolute",
    },
    copyMsg: {
      position: "fixed",
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "4rem",
      transform: "scale(0.1)",
      opacity: 0,
      color: "white",
      "& h1": {
        fontWeight: 400,
        textShadow: "1px 2px black",
        background: "rgba(255, 255, 255, 0.3)",
        width: "100%",
        textAlignment: "center",
        marginBottom: 0,
        padding: "1rem",
        textTransform: "uppercase",
      },
      "& p": {
        fontSize: "2rem",
        fontWeight: 100,
      },
    },
    copyMsgShow: {
      opacity: 1,
      transform: "scale(1)",
      zIndex: 25,
      transition: "all 0.3s ease-in-out",
      transitionDelay: "0.3s",
    },
  });
  const classes = useStyles(props);
  const [copied, setCopied] = useState(false);
  function changeCopyState() {
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1500);
  }

  return (
    <CopyToClipboard text={background} onCopy={changeCopyState}>
      <div style={{ background }} className={classes.ColorBox}>
        <div
          style={{ background }}
          className={`${classes.copyOverlay} ${copied && classes.showOverlay}`}
        />
        <div className={`${classes.copyMsg} ${copied && classes.copyMsgShow}`}>
          <h1>Copied!</h1>
          <p className={classes.copyText && classes.copyMsgP}>{background}</p>
        </div>
        <div>
          <div className="box-content">
            <span className={classes.colorName}>{name}</span>
          </div>
          <button className={classes.copyButton}>Copy</button>
        </div>
        {showingFullPalette && (
          <Link to={moreUrl} onClick={(e) => e.stopPropagation()}>
            <span className={classes.seeMore}>MORE</span>
          </Link>
        )}
      </div>
    </CopyToClipboard>
  );
}
