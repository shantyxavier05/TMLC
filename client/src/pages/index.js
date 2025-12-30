import Head from "next/head";
import { useEffect, useState } from "react"; //React Hook for State
import axios from "axios"; // npm i axios

// Material
import {
  Box,
  Container,
  CssBaseline,
  Grid,
  ThemeProvider,
} from "@mui/material";
import { useTheme } from "@mui/material";
 
import MyAppBar from "../components/common/MyAppBar";

import { lighttheme, Darktheme } from "@src/styles/mui/theme";
import { CustomCard, MyCard } from "../styles/mui/customComponents";

// Redux
import { useSelector, useDispatch } from "react-redux";
import { selectTheme, getActiveTheme } from "../redux/reducers/themeReducer";

export default function Home() {
  const dispatch = useDispatch();
  const currentTheme = useSelector(selectTheme).activeTheme;

  const [movies, setMovies] = useState(null);

  useEffect(() => {
    dispatch(getActiveTheme()); // To get theme from Cookie
    fetchData();
  }, []);

  // const [visible, setVisible] = useState(false); // Always call hooks at the top of the function.
  // const [currentTheme, setCurrentTheme] = useState("light");

  const theme = useTheme();

  const fetchData = async () => {
    try {
      const response = await axios.get("/api/v1/get/movies");
      console.log("response: ", response.data);
      console.log("HAHAHAHA")

      setMovies(response.data)

    } catch (error) {
      
    } finally {
      console.log("finally")
    }
  }

  return (
    <>
      <ThemeProvider theme={currentTheme === "dark" ? Darktheme : lighttheme}>
        <CssBaseline />
        <Head>
          <title>The Movie Lovers Club | Your Favourite Movie Articles!</title>
          <meta name="description" content="" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <MyAppBar />
        <Box height="25px" />
        <Box>
          <Container>
            <Grid container spacing={2} direction="row" justifyContent="center">
              {movies ? (
                movies.response.map((movie) => (
                  <Grid size={{ xl: 4, md: 4, xs: 12 }}>
                    <CustomCard
                      name={movie.name}
                      image={movie.img}
                      description={movie.desc}
                    />
                  </Grid>
                ))
              ) : (
                <></>
              )}
            </Grid>
          </Container>
          {/* <Button onClick={() => setVisible(!visible)}>Toggle</Button>

            <Box height="20px" />

            {visible ? (
              <Box height="200px" sx={{ background: "pink", width: "500px" }} />
            ) : (
              <></>
            )} */}
        </Box>
      </ThemeProvider>
    </>
  );
}