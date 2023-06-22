import React from "react";
import { createUseStyles } from "react-jss";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { SortableElement } from "react-sortable-hoc";
const styles = {
  root: {
    width: "20%",
    height: "25%",
    margin: "0 auto",
    display: "inline-block",
    position: "relative",
    marginBottom: "-3.5px",
    "&:hover svg": {
      color: "white",
      transform: "scale(1.5)",
    },
  },
  boxContent: {
    position: "absolute",
    width: "100%",
    left: "0px",
    padding: "10px",
    bottom: "0px",
    color: "rgba(0, 0, 0, 0.5)",
    letterSpacing: "1px",
    textTransform: "uppercase",
    fontSize: "12px",
    display: "flex",
    justifyContent: "space-between",
  },
  deleteIcon: {
    transition: "all 0.3s ease-in-out",
  },
};
const useStyles = createUseStyles(styles);

const DraggableColorBox = SortableElement((props) => {
  const {color, handleClick, name} = props;
  const classes = useStyles(props);
  return (
    <div className={classes.root} style={{ backgroundColor: color }}>
      <div className={classes.boxContent}>
        <span>{name}</span>
        <DeleteOutlineIcon
          className={classes.deleteIcon}
          onClick={handleClick}
        />
      </div>
    </div>
  );
})
export default DraggableColorBox