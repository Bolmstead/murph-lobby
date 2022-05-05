/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import useMediaQuery from "@mui/material/useMediaQuery";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/material";
import Divider from "@mui/material/Divider";

const Story = () => {
  const theme = useTheme();

  return (
    <Grid container spacing={1} justify="center" style={{ padding: "0px" }}>
      <Grid item container alignItems={"center"} xs={12} md={6}>
        <Box
          width={1}
          boxShadow={0}
          style={{ backgroundColor: "rgb(247,250,255)", marginBottom: "60px"}}
          variant={"outlined"}
        >
          <CardContent sx={{ padding: 5 }}>
            <Typography
              variant={"h4"}
              gutterBottom
              sx={{
                fontWeight: 700,
                textAlign: "center",
                color: "#1E2022",
              }}
            >
              About the Firm
            </Typography>
            <Box style={{width: "100%", display: "flex", justifyContent: "center"}}>
            <Divider  style={{marginBottom: "15px", width: "300px"}}/>
            </Box>


            <Typography component={"p"} style={{ textAlign: "center" }} color={"text.secondary"}>
              Our focus is always on finding the best people to work with. Our
              bar is high, but you look ready to take on the challenge. We
              design and implement creative solutions to everyday business
              problems.
              <br />
              <br />
              We are a team of creative consultants who help bridge the digital
              gap between companies
            </Typography>
          </CardContent>
        </Box>
      </Grid>
      <Grid
        item
        container
        justifyContent="center"
        alignItems="center"
        xs={12}
        md={6}
        style={{ display: "flex", flexDirection: "column" }}
      >
        <Box
          component={"img"}
          src={"/profile.jpg"}
          height={"400px"}
          style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
          sx={{
            filter: theme.palette.mode === "dark" ? "brightness(0.8)" : "none",
          }}
        />
        <h2
          style={{
            color: "#1E2022",
            paddingBottom: "0px",
            marginBottom: "0px",
          }}
        >
          Murphy Olmstead
        </h2>{" "}
        <span style={{ color: "#677787" }}>Owner / Lobbyist</span>{" "}
      </Grid>
    </Grid>
  );
};

export default Story;
