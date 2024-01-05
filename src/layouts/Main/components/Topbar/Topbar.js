import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Toolbar from "@mui/material/Toolbar";

import Container from "@mui/material/Container";

export default function Topbar({ windowWidth }) {
  return (
    <Box sx={{ flexGrow: 1, zIndex: 100, backgroundColor: "white" }}>
      <AppBar position="static" style={{ backgroundColor: "white" }}>
        <Container maxWidth="xl">
          <Toolbar style={{ padding: "20px 0px 20px 0px" }}>
            <Grid
              container
              justifyContent={windowWidth > 678 ? "space-between" : "center"}
            >
              <img src="logoBlack.png" style={{ width: "300px" }} />

              <Grid item style={{ display: "flex", alignItems: "center" }}>
                {" "}
                <a
                  style={{ textDecoration: "none", textTransform: "none" }}
                  href="#about"
                >
                  <Button
                    style={{
                      color: "#1E2022",
                      fontWeight: 500,
                      fontSize: 22,
                      width: windowWidth > 678 ? "160px" : "160px",
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
                      fontSize: 22,
                      width: windowWidth > 678 ? "160px" : "160px",
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
                      fontSize: 22,
                      width: windowWidth > 678 ? "160px" : "160px",
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
