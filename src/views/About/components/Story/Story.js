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
              Murphy Olmstead{" "}
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
              Wittmeyer & Associates, LLC is a government affairs and consulting
              firm located in Boise, Idaho. Our clients include multinational
              conglomerates, state level associations and local governments. The
              firm has an established reputation with over 20 years of
              experience in federal and state level government policy. We use
              our expertise and relationships with state policy makers to
              accomplish any client objectives. <br />
              <br />
              We offer a wide range of services, from negotiating sensitive
              issues for corporate clients to forming coalitions for small
              interest groups. Our experience and ability to work with
              individuals, associations, and grassroots organizations helps us
              stand out from other firms. We strategize to help our clients
              navigate the often-complex problems that come with government.
              <br />
              <br />
              Alma Mater: University of Idaho, BS in Business Marketing/
              Entrepreneurship
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
