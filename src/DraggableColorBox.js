import React from 'react'
import { createUseStyles } from "react-jss";
const styles = {
    root: {
        width: "20%",
        height: "25%",
        margin: "0 auto",
        display: "inline-block",
        position: "relative",
        marginBottom: "-3.5px",
    }
}
const useStyles = createUseStyles(styles);
export default function DraggableColorBox(props) {
  const classes = useStyles(props);
  return (
    <div className={classes.root} style={{backgroundColor: props.color}}>{props.color}</div>
  )
}
