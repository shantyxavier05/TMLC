const { createTheme, } = require("@mui/material/styles");

//colour variables
const backgroundColour = "#BA5870";
const primaryColour = "#F86C64";
const secondaryColour = "#D9D9D9";
const textColour = "#000000ff";
const highlight = "#CAB6BA";

//colour 
const backgroundColourdark = "#f2ededff";
const primaryColourdark = "#cd433cff";
const secondaryColourdark = "#767070ff";
const textColourdark = "#BA5870";
const highlightdark = "#CAB6BA";

//theme
let lighttheme = createTheme({
    palette: {
        mode: "light",
        background: {
            default: backgroundColour,

        },
        primary:{
            main: primaryColour,
        },
         secondary:{
            main: secondaryColour,
        },
         tertiary:{
            main: highlight,
        },
         icon:{
            main: textColour,
        },
         error:{
            main: "#9D1818",
        },

    },
    typography: {
    h1: {
      fontFamily: 'Montserrat',
    },
    fontFamily: 'Montserrat',
    body1: {
      fontFamily: 'Raleway',
    },
    body2: {
      fontFamily: 'Raleway',
    },
    subtitle1: {
      fontFamily: 'Raleway',
    },
    subtitle2: {
      fontFamily: 'Raleway',
    },
    button: {
      fontWeight: 500,
    },
  },
});


//dark theme
let Darktheme = createTheme({
    palette: {
        mode: "dark",
        background: {
            default: backgroundColourdark,

        },
        primary:{
            main: primaryColourdark,
        },
         secondary:{
            main: secondaryColourdark,
        },
         tertiary:{
            main: highlightdark,
        },
         icon:{
            main: textColourdark,
        },
         error:{
            main: "#9D1818",
        },

    },
    typography: {
    h1: {
      fontFamily: 'Montserrat',
    },
    fontFamily: 'Montserrat',
    body1: {
      fontFamily: 'Raleway',
    },
    body2: {
      fontFamily: 'Raleway',
    },
    subtitle1: {
      fontFamily: 'Raleway',
    },
    subtitle2: {
      fontFamily: 'Raleway',
    },
    button: {
      fontWeight: 500,
    },
  },
});


export{ lighttheme,Darktheme};
