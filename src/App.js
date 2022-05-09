import { React } from "react";
import "./App.css";
import Appbar from "./Appbar";
import Cont from "./cont";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

function App() {
  return (
    <div>
      <Appbar />
      <Box maxWidth="xl"
        sx={{
          flexGrow: 1,
          display: {
            md: "flex",
            flexDirection: 'column',
            alignItems: "center",
          },
          m: 'auto',
        }}
      >
        <h2>My React App is Online at Github. </h2>
        <Grid
          container
          spacing={2}
          sx={{ margin: "auto", justifyContent: "center" }}
        >
          <Grid item xs={4}>
            <Cont />
          </Grid>
          <Grid item xs={4}>
            <Cont />
          </Grid>
          <Grid item xs={4}>
            <Cont />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default App;
