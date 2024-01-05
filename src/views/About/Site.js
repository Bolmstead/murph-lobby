import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import { useEffect, useState } from "react";

import Container from "components/Container";
import Main from "layouts/Main";
import { Topbar } from "layouts/Main/components";
import { Contact, Hero, Story, Team } from "./components";

const Site = () => {
  const [windowWidth, setWindowWidth] = useState(null);

  useEffect(() => {
    function handleResize() {
      let width = Math.min(1200, window.innerWidth - 40);
      console.log("🚀 ~ file: Site.js:25 ~ handleResize ~ width:", width);
      setWindowWidth(width);
    }
    window.addEventListener("resize", handleResize);
    handleResize();
  }, []);

  return (
    <Main colorInvert={true}>
      <Topbar windowWidth={windowWidth} />
      <Hero />{" "}
      <Container maxWidth={800} paddingY={"0 !important"}>
        <Divider />
      </Container>
      <a id="about">
        <Box bgcolor={"alternate.main"}>
          <Container style={{ padding: "30px 30px" }}>
            <Story />
          </Container>
        </Box>
      </a>
      <Divider />
      {/* <Container paddingTop={'0 !important'}>
        <WhoWeAre />
      </Container> */}
      {/* <Container maxWidth={800} paddingY={"0 !important"}>
        <Divider />
      </Container> */}
      <a id="expertise">
        <Container>
          <Team />
        </Container>
      </a>
      <Divider />
      {/* <Box bgcolor={"alternate.main"}>
        <Container>
          <Partners />
        </Container>
      </Box> */}
      <Box bgcolor={"alternate.main"}>
        <a id="contact">
          <Contact />
        </a>
      </Box>
    </Main>
  );
};

export default Site;
