import React, { useEffect, useState } from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Fade from "@mui/material/Fade";
import Container from "@mui/material/Container";
import { Hidden } from "@mui/material";

function DefaultHomePage() {
  const [checked, setChecked] = useState(false);

  // useEffect(() => {
  //   function fadeInText() {
  //     setChecked(true);
  //   }
  //   setTimeout(() => {
  //     console.log("Delayed for 1 second.");
  //     fadeInText();
  //   }, 1000);
  // }, []);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  return (
    <div style={{ position: "relative", height: "94vh", width: "100%" }}>
      <div
        style={{
          height: "100%",
          width: "100%",
          position: "absolute",
          display: "flex",
        }}
      >
        <Hidden mdDown={true}>
          <div
            style={{
              marginTop: "25vh",
              backgroundColor: "rgba(60,89,121, 0.7)",
              width: "75vw",
              position: "absolute",
              paddingBottom: "20px",
            }}
          >
            <Container style={{ zIndex: 500 }} maxWidth="md">
              <h1 style={{ color: "white", zIndex: 1000 }}>
              INNOVATIVE ADVOCACY
              </h1>
              <div style={{ maxWidth: "800px" }}>
                <span style={{ color: "white" }}>
                  At Wittmeyer and Associates we successfully adapt to an
                  ever-changing landscape in Idaho, regardless of budgetary
                  conditions or politics of the day. As advocates and strategic
                  advisors, we educate and empower decision makers with
                  facts and insights through winning strategies.
                </span>
              </div>
            </Container>
          </div>
        </Hidden>

        <Hidden mdUp={true}>
          <div
            style={{
              marginTop: "25vh",
              backgroundColor: "rgba(60,89,121, 0.7)",
              width: "100%",
              position: "absolute",
              paddingBottom: "20px",
            }}
          >
            <Container style={{ zIndex: 500 }} maxWidth="md">
              <h1 style={{ color: "white", zIndex: 1000 }}>
              INNOVATIVE ADVOCACY
              </h1>
              <div style={{ maxWidth: "800px" }}>
                <span style={{ color: "white" }}>
                  At Wittmeyer and Associates we successfully adapt to an
                  ever-changing landscape in Idaho, regardless of budgetary
                  conditions or politics of the day. As advocates and strategic
                  advisors, we educate and empower federal decision makers with
                  facts and insights through winning strategies.
                </span>
              </div>
            </Container>
          </div>
        </Hidden>
      </div>

      <img
        style={{
          height: "94vh",
          display: "block",
          overflow: "hidden",
          objectFit: "cover",
          width: "100%",
          flexGrow: 1,
        }}
        src="/capital-1.jpeg"
      >
      </img>
    </div>
  );
}

export default DefaultHomePage;
