import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

import Container from "@mui/material/Container";

export default function Topbar({ windowWidth }) {
  console.log(windowWidth);
  return (
    <Box sx={{ flexGrow: 1, zIndex: 100, backgroundColor: "white" }}>
      <AppBar position="static" style={{ backgroundColor: "white" }}>
        <Container maxWidth="lg">
          <Toolbar style={{ padding: "10px" }}>
            <Grid
              container
              justifyContent={windowWidth > 678 ? "space-between" : "center"}
            >
              <img src="logo-example.gif" style={{ width: "250px" }} />

              <Grid item>
                {" "}
                <a
                  style={{ textDecoration: "none", textTransform: "none" }}
                  href="#about"
                >
                  <Button
                    style={{
                      color: "#1E2022",
                      fontWeight: 500,
                      fontSize: 18,
                      width: windowWidth > 678 ? "100px" : "70px",
                    }}
                  >
                    About
                  </Button>
                </a>
                <a
                  style={{ textDecoration: "none", textTransform: "none" }}
                  href="#expertise"
                >
                  <Button
                    style={{
                      color: "#1E2022",
                      fontWeight: 500,
                      fontSize: 18,
                      width: windowWidth > 678 ? "100px" : "70px",
                      marginLeft: windowWidth > 678 ? "20px" : "10px",
                    }}
                  >
                    Expertise
                  </Button>
                </a>
                <a
                  style={{ textDecoration: "none", textTransform: "none" }}
                  href="#contact"
                >
                  <Button
                    style={{
                      color: "#1E2022",
                      fontWeight: 500,
                      fontSize: 18,
                      width: windowWidth > 678 ? "100px" : "70px",
                      marginLeft: windowWidth > 678 ? "20px" : "10px",
                    }}
                  >
                    Contact
                  </Button>
                </a>
              </Grid>
            </Grid>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}
