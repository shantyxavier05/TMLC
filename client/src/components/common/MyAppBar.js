import Link from "next/link";
import { useEffect, useState } from "react";

// MUI Imports
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
// import { CssBaseline, ThemeProvider } from "@mui/material";

import { useTheme } from "@mui/material";

// Icons
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { useDispatch, useSelector } from "react-redux";
import { selectTheme, toggleTheme } from "@src/redux/reducers/themeReducer";
import { Cookies } from "react-cookie";

//import { Darktheme, theme } from "@/styles/mui/theme";

const cookies = new Cookies();

export default function MyAppBar() {
  const [token, setToken] = useState();

  useEffect(() => {
    const token = cookies.get("token");
    setToken(token);
  }, []);

  const handleLogout = () => {
    cookies.remove("token");
    window.location.href = "/login";
  };

  const dispatch = useDispatch();
  const currentTheme = useSelector(selectTheme).activeTheme;
  const theme = useTheme();

  // const [currentTheme, setCurrentTheme] = useState("dark");

  return (
    <>
      {/* <ThemeProvider theme={currentTheme === "dark" ? darkTheme : theme}> */}
      {/* <CssBaseline /> */}
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" color="primary">
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
            <Typography variant="h6" component="Box" sx={{ flexGrow: 1 }}>
              The Movie Lovers Club
            </Typography>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={() => dispatch(toggleTheme())}
            >
              {currentTheme === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
            </IconButton>
            <Link href="/">
              <Button sx={{ color: theme.palette.icon.main }}>Home</Button>
            </Link>
            <Link href="/blog">
              <Button sx={{ color: theme.palette.icon.main }}>Blog</Button>
            </Link>
            {token ? (
              <Button color="inherit" onClick={handleLogout}>Log Out</Button>
            ) : (
              <Button color="inherit" href="/login">Login</Button>
            )}
          </Toolbar>
        </AppBar>
      </Box>
      {/* </ThemeProvider> */}
    </>
  );
}