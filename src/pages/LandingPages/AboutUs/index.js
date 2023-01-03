/*
=========================================================
* Material Kit 2 React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Container from "@mui/material/Container";

import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 React examples
import Navbar from "pages/LandingPages/AboutUs/sections/Navbar";
import Contact from "pages/LandingPages/Author/sections/Contact";
import Profile from "pages/LandingPages/Author/sections/Profile";
import Proj from "pages/LandingPages/AboutUs/sections/slider";
import Testimonials from "pages/LandingPages/AboutUs/sections/Testimonials/Testimonials";
import CenteredFooter from "examples/Footers/CenteredFooter";
import * as constants from "pages/LandingPages/constants";

// Images
import bgImage from "assets/images/OIP.jpg";

const style={
  textAlign:"center",
  position: "relative",
  left: "10px"
}
const styleb={
  backgroundColor:"#192841"
}

function AboutUs() {
  return (
    <>
      <div id="background">
      <Navbar/>
      <MKBox
        minHeight="100vh"
        width="100%"
        sx={{
          backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
            `${linearGradient(
              rgba(gradients.dark.main, 0.6),
              rgba(gradients.dark.state, 0.6)
            )}, url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "grid",
          placeItems: "center",
        }}
      >
        <Container >
          <Grid 
            container
            item
            xs={12}
            lg={8}
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            sx={{ mx: "auto", textAlign: "center" }}
          >
            <MKTypography
              variant="h1"
              color="white"
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: {
                  fontSize: size["3xl"],
                },
              })}
            >
              Hi, my name is {constants.ABOUT_ME}
            </MKTypography>
            <MKTypography variant="body1" color="white" opacity={0.8} mt={1} mb={3}>
             I am a {constants.DESIGNATION}
            </MKTypography>
          </Grid>
        </Container>
      </MKBox>
      <Card style={styleb}
        sx={{
          p: 2,
          mx: { xs: 2, lg: 3 },
          mt: -8,
          mb: 4,
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
      >
        <Profile/>
        <MKTypography variant="h3" style={style}>My Projects</MKTypography>
        <Proj />
        <Contact style={styleb}/>
        <Testimonials style={styleb}/>
        <CenteredFooter style={styleb}/>
        </Card>
        </div>
    </>
  );
}

export default AboutUs;
