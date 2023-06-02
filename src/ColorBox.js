import React, { useState } from "react";
import styles from "./styles/ColorBoxStyles"
import { Link } from "react-router-dom";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { createUseStyles } from "react-jss";
export default function ColorBox(props) {
  const useStyles = createUseStyles(styles);
  const { name, background, moreUrl, showingFullPalette } = props;
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
          <div className={classes.boxContent}>
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
