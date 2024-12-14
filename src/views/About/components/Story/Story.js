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
              As a fourth-generation Idahoan, Mr. Olmstead has deep-rooted
              lineage within the Idaho political landscape. His great-uncle,
              Ralph Olmstead, served as Speaker of the House from 1978-1982.
              Murphy's father, Brent Olmstead, served the state of Idaho in
              multiple government affairs roles such as the Assistant Dean at
              the University of Idaho College of Agriculture & Life Sciences and
              as the former President of the Milk Producers of Idaho.
              <br />
              <br />
              With over seven years of experience in government affairs, Murphy
              navigates his clients through the labyrinth of government by
              always mapping out the objective. A firm believer in studying the
              route, Murphy doesn't leave a stone unturned.He believes that
              results begin with relationship building, honest public policy and
              respect for the process. Mr. Olmstead took over the firm in 2018
              to carry on the legacy that is W & A, LLC. His passion is driven
              through the character and work ethic of his late step-mother, Jane
              W.
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
