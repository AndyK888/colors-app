import React from "react";
import { createUseStyles } from "react-jss";
import styles from "./styles/PaletteFooterStyles";
const useStyles = createUseStyles();
export default function PaletteFooter(props) {
  const classes = useStyles(styles);
  const { paletteName, emoji } = props;
  return (
    <footer className={classes.PaletteFooter}>
      {paletteName}
      <span className={classes.emoji}>{emoji}</span>
    </footer>
  );
}
