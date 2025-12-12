const { createTheme } = require("@mui/material");

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
let theme = createTheme({
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
});

export{ theme,Darktheme};
