import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";

const Footer = () => {
  const theme = useTheme();
  const { mode } = theme.palette;

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
            Olmstead Tech Services Inc
          </a>
          . All rights reserved.
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Footer;
