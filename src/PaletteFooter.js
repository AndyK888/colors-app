import React from 'react'
import { createUseStyles } from "react-jss";
export default function PaletteFooter(props) {
    const useStyles = createUseStyles({
        PaletteFooter: {
            backgroundColor: "white",
            height: "5hv",
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            fontWeight: "bold",
        },
        emoji: {
            fontSize: "1.5rem",
            margin: "1rem 0",
        },
    });
    const classes = useStyles();
    const {paletteName, emoji} = props
  return (
    <footer className={classes.PaletteFooter}>
    {paletteName}
    <span className={classes.emoji}>{emoji}</span>
    </footer>
  )
}
