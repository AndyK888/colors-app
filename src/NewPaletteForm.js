import React from "react";

import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { ChromePicker } from "react-color";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import DraggableColorList from "./DraggableColorList";
import {arrayMoveImmutable} from "array-move"
const drawerWidth = 300;
const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    height: "calc(100vh - 63px)",
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export default class NewPaletteForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      currentColor: "",
      newColorName: "",
      colors: [],
      newPaletteName: "",
    };
    this.handleDrawerClose = this.handleDrawerClose.bind(this);
    this.handleDrawerOpen = this.handleDrawerOpen.bind(this);
    this.updateCurrentColor = this.updateCurrentColor.bind(this);
    this.addNewColor = this.addNewColor.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.removeColor = this.removeColor.bind(this);
    this.onSortEnd = this.onSortEnd.bind(this);
  }
  componentDidMount() {
    ValidatorForm.addValidationRule("isColorNameUnique", (value) => {
      this.state.colors.every(
        ({ name }) => name.toLowerCase() !== value.toLowerCase()
      );
    });
    ValidatorForm.addValidationRule("isColorUnique", () => {
      this.state.colors.every(({ color }) => color !== this.state.currentColor);
    });
    ValidatorForm.addValidationRule("isPaletteNameUnique", (value) => {
      this.props.palettes.every(
        ({ paletteName }) => paletteName.toLowerCase() !== value.toLowerCase()
      );
    });
  }

  handleChange = (evt) => {
    this.setState({ [evt.target.name]: evt.target.value });
  };
  handleDrawerOpen = () => {
    this.setState({ open: true });
  };
  handleDrawerClose = () => {
    this.setState({ open: false });
  };
  updateCurrentColor(newColor) {
    console.log(newColor);
    this.setState({ currentColor: newColor.hex });
  }
  removeColor(colorName) {
    this.setState({ 
      colors: this.state.colors.filter(color => color.name !== colorName)
     });
  }
  handleSubmit() {
    let newName = this.state.newPaletteName;
    const newPalette = {
      paletteName: newName,
      id: newName.toLowerCase().replace(/ /g, "-"),
      colors: this.state.colors,
    };
    this.props.savePalette(newPalette);
    this.props.navHook("/");
  }
  addNewColor(e) {
    e.preventDefault();
    const newColor = {
      color: this.state.currentColor,
      name: this.state.newColorName,
    };
    this.setState({
      colors: [...this.state.colors, newColor],
      newColorName: "",
    });
  }
  onSortEnd = ({oldIndex, newIndex}) => {
    this.setState(({colors}) => ({
      colors: arrayMoveImmutable(colors, oldIndex, newIndex),
    }));
  };
  render() {
    return (
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar position="fixed" color="default" open={this.state.open}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={this.handleDrawerOpen}
              edge="start"
              sx={{ mr: 2, ...(this.state.open && { display: "none" }) }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap component="div">
              Persistent drawer
            </Typography>
            <ValidatorForm onSubmit={this.handleSubmit}>
              <TextValidator
                label="Palette Name"
                name="newPaletteName"
                onChange={this.handleChange}
                value={this.state.newPaletteName}
                validators={["required"]}
                errorMessages={["enter palette name"]}
              />
              <Button variant="contained" color="primary" type="submit">
                Save Palette
              </Button>
            </ValidatorForm>
          </Toolbar>
        </AppBar>
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
          variant="persistent"
          anchor="left"
          open={this.state.open}
        >
          <DrawerHeader>
            <IconButton onClick={this.handleDrawerClose}>
              <ChevronLeftIcon />
            </IconButton>
          </DrawerHeader>
          <Divider />
          <Typography variant="h4">Design your palette</Typography>
          <Stack spacing={1} direction="row">
            <Button variant="contained" color="secondary">
              Clear Palette
            </Button>
            <Button variant="contained" color="primary">
              Random Color
            </Button>
          </Stack>
          <ChromePicker
            color={this.state.currentColor}
            onChangeComplete={this.updateCurrentColor}
          />

          <ValidatorForm onSubmit={this.addNewColor}>
            <TextValidator
              value={this.state.newColorName}
              name="newColorName"
              onChange={this.handleChange}
              validators={["required"]}
              errorMessages={["Enter a color name"]}
            />
            <Button
              variant="contained"
              color="primary"
              style={{ backgroundColor: this.state.currentColor }}
              type="submit"
            >
              Add Color
            </Button>
          </ValidatorForm>
        </Drawer>
        <Main open={this.state.open}>
          <DrawerHeader />
          <DraggableColorList colors={this.state.colors} removeColor={this.removeColor} axis="xy" onSortEnd={this.onSortEnd}  />
        </Main>
      </Box>
    );
  }
}
