/* eslint-disable import/no-anonymous-default-export */
export default {
	Palette: {
		height: "100vh",
		display: "flex",
		flexDirection: "column",
	},
  ColorBox: {
    width: "20%",
    height: "50%",
    margin: "0 auto",
    display: "inline-block",
    position: "relative",
    marginBottom: "-3.5px",
    "&:hover": {
      opacity: "1",
      transition: "0.5s",
    },
    "&back-button":{
      backgroundColor: "black",
    }
  },
	PaletteColors: {
		height: "90%",
	},
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
  backButton: {
    width: "20%",
    height: "50%",
    margin: "0 auto",
    display: "inline-block",
    position: "relative",
    marginBottom: "-3.5px",
    opacity: "1",
    backgroundColor: "black",
    "& a" : {
      width: '100px',
      height: '30px',
      position: 'absolute',
      display: 'inline-block',
      top: '50%',
      left: '50%',
      marginLeft: '-50px',
      marginTop: '-15px',
      textAlign: 'center',
      outline: 'none',
      background: 'rgba(255, 255, 255, 0.3)',
      fontSize: '1rem',
      lineHeight: '30px',
      color: 'white',
      textTransform: 'uppercase',
      border: 'none',
      textDecoration: 'none',
    }
  }
}