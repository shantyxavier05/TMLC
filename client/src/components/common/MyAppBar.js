//use capital letter to name a file in component file
import Link from "next/link";

//MUI imports
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
//import { CssBaseline, ThemeProvider } from "@mui/material";
//import { Darktheme, theme } from "@src/styles/mui/theme";
import { DarkMode } from "@mui/icons-material";
//import { useState } from "react";

import LightModeIcon from '@mui/icons-material/LightMode';
import { useTheme } from "@mui/material";


import { useDispatch, useSelector } from "react-redux";
import { selectTheme, toggleTheme } from "@src/redux/reducers/themeReducer";

export default function MyAppBar() {
 {/*const[currentTheme,setCurrentTheme] = useState("dark");*/}

   const dispatch = useDispatch();
  const currentTheme = useSelector(selectTheme).activeTheme;
 const theme=useTheme()
  return (
    
    <>
     {/* <ThemeProvider theme={currentTheme === "dark" ? Darktheme : theme}>*/}
        {/*<CssBaseline/>*/}
      <div>
       <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
            <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={() => dispatch(toggleTheme())}
            
      
          >
            {currentTheme==="dark" ? <LightModeIcon />: <DarkMode />}
            
          </IconButton>

          <Link href="/blog">
          
          <Button sx={{ color: theme.palette.icon.main }}>Blog</Button>
          </Link>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
      </div>
      {/*</ThemeProvider>*/}
     
    </>
  );
}
