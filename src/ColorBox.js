import React, { useState } from "react";
import chroma from "chroma-js";
import { Link } from "react-router-dom";
import { CopyToClipboard } from "react-copy-to-clipboard";
import "./ColorBox.css";
import { createUseStyles } from "react-jss";
export default function ColorBox(props) {
  const { name, background, moreUrl, showLink } = props;
  const useStyles = createUseStyles({
    copyText: {
      color: (props) =>
        chroma(props.background).luminance() >= 0.7 ? "black" : "white",
    },
  });
  const classes = useStyles(props);
  const [copied, setCopied] = useState(false);
  function changeCopyState () {
    setCopied(true)
    setTimeout(() => {setCopied(false)},1500)
  }

  const isDarkColor = chroma(background).luminance() <= 0.3;
  const isLightColor = chroma(background).luminance() >= 0.3;
  return (
    <CopyToClipboard text={background} onCopy={changeCopyState}>
      <div style={{ background }} className="ColorBox">
        <div
          style={{ background }}
          className={`copy-overlay ${copied && "show"}`}
        />
        <div className={`copy-msg ${copied && "show"}`}>
          <h1>Copied!</h1>
          <p className={classes.copyText}>{background}</p>
        </div>
        <div className="copy-container">
          <div className="box-content">
            <span className={isDarkColor ? "light-text" : ""}>{name}</span>
          </div>
          <button className={`copy-button ${isLightColor && "dark-text"}`}>
            Copy
          </button>
        </div>
        {showLink && (
          <Link to={moreUrl} onClick={(e) => e.stopPropagation()}>
            <span className={`see-more ${isLightColor && "dark-text"}`}>
              MORE
            </span>
          </Link>
        )}
      </div>
    </CopyToClipboard>
  );
}
