import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

const Footer = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography
          align={"center"}
          variant={"subtitle2"}
          color="text.secondary"
          gutterBottom
        >
          Site built by{" "}
          <a
            style={{ color: "inherit" }}
            href="https://www.berkleyolmstead.com"
          >
            Olmstead Tech Services Inc.
          </a>
          <Typography
            align={"center"}
            variant={"subtitle2"}
            color="text.secondary"
            gutterBottom
          >
            All rights reserved.{" "}
          </Typography>
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Footer;
