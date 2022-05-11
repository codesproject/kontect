import { React } from "react";
import "./App.css";
import Appbar from "./Appbar";
import Cont from "./cont";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

function App(props) {
  return (
    <div>
      <Appbar />
      <Box
        maxWidth="xl"
        sx={{
          flexGrow: 1,
          display: {
            md: "block",
            flexDirection: "column",
            alignItems: "center",
          },
          m: "auto",
        }}
      >
        <h2>My React App is Online at Github. </h2>
        <Grid
          container
          spacing={2}
          sx={{ margin: "auto", justifyContent: "center", display: {sm: 'flex', md: 'flex'} }}
        >
          <Grid item xs={4}>
            <Cont
              btn01="ADD"
              btnColor="success"
              btn2Color="error"
              btnVar="contained"
              btn3="OPEN"
              MContent={props.ModalContHandler1}
            />
            
          </Grid>
          <Grid item xs={4}>
            <Cont
              btn01="edit"
              btnColor="warning"
              btn2Color="info"
              btnVar="outlined"
              btn3="FORM"
              MContent={props.ModalContHandler2}
            />
          </Grid>
          <Grid item xs={4}>
            <Cont
              btn01="share"
              btnColor="info"
              btn2Color="warning"
              btnVar="outlined"
              btn3="MODAL"
              MContent={props.ModalContHandler3}
            />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default App;
