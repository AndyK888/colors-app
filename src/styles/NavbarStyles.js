/* eslint-disable import/no-anonymous-default-export */
export default {
    Navbar: {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-start",
      height: "6vh",
    },
    logo: {
      marginRight: "15px",
      padding: "0 13px",
      fontSize: "22px",
      backgroundColor: "#eceff1",
      height: "100%",
      display: "flex",
      alignItems: "center",
      fontFamily: '"Roboto", sans-serif',
      "& a": {
        textDecoration: "none",
        color: "black !important",
      },
    },
    slider: {
      width: "350px",
      margin: "0 10px",
      display: "inline-block",
      "& .rc-slider-track": {
        backgroundColor: "transparent",
      },
      "& .rc-slider-rail": {
        height: "8px",
      },
      "& .rc-slider-handle:hover, .rc-slider-handle:focus, .rc-slider-handle:active, .rc-slider-handle":
        {
          backgroundColor: "green",
          outline: "none",
          border: "2px solid green",
          boxShadow: "none",
          width: "13px",
          height: "13px",
          marginLeft: "-7px",
          marginTop: "-2px",
        },
    },
    selectContainer: {
      marginLeft: "auto",
      marginRight: "1rem",
    },
  }