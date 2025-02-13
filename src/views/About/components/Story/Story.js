/* eslint-disable react/no-unescaped-entities */
import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";

const Story = () => {
  const theme = useTheme();

  return (
    <Grid container spacing={1} justify="center" style={{ padding: "0px" }}>
      <Grid item container alignItems={"center"} xs={12} md={7}>
        <Box
          width={1}
          boxShadow={0}
          style={{ backgroundColor: "rgb(247,250,255)", marginBottom: "30px" }}
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
              About
            </Typography>
            <Box
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Divider style={{ marginBottom: "15px", width: "300px" }} />
            </Box>

            <Typography
              component={"p"}
              style={{ textAlign: "center" }}
              color={"text.secondary"}
            >
              We are a full-service government affairs and consulting firm
              located in Boise, Idaho. Our clients include multinational
              conglomerates, state level associations and local governments. The
              firm has an established reputation with over 20 years of
              experience in federal and state level government policy. We use
              our expertise and relationships with state policy makers to
              accomplish any client objectives.
              <br />
              <br />
              Wittmeyer & Associates, LLC was founded in 2008 by the late Jane
              Wittmeyer. Since her passing, the firm was taken over by her son,
              Murphy Olmstead in 2018. Murphy Olmstead is the current Principal
              Owner and has since carried on the legacy of his mother through
              honest policy and a client dedicated approach.
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
        md={5}
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
        {/* <h2
          style={{
            color: "#1E2022",
            paddingBottom: "0px",
            marginBottom: "0px",
          }}
        >
          Murphy Olmstead
        </h2>{" "}
        <span style={{ color: "#677787" }}>Owner / Lobbyist</span> */}
      </Grid>
    </Grid>
  );
};

export default Story;
