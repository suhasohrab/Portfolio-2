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
import Card from "@mui/material/Card";

// Material Kit 2 React components
import MKBox from "components/MKBox";

// Material Kit 2 React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";

// Author page sections
import Profile from "pages/LandingPages/Author/sections/Profile";
import Proj from "pages/LandingPages/Author/sections/slider";
import Contact from "pages/LandingPages/Author/sections/Contact";
import { Helmet } from "react-helmet";
// Routes
import routes from "routes";

import "./main.css";
// Images
import bgImage from "assets/images/city-profile.jpg";
import Testimonials from "../AboutUs/sections/Testimonials/Testimonials";

function Author() {
  return (
    <>
      <DefaultNavbar
        routes={routes}
        action={{
          type: "external",
          route: "https://www.creative-tim.com/product/material-kit-react",
          label: "free download",
          color: "info",
        }}
        transparent
        light
      />
        <div>
      <Helmet>
        <style>{"body { background-color: red; }"}</style>
        </Helmet>
      <MKBox bgColor="#192841">
        <MKBox
          minHeight="25rem"
          width="100%"
          sx={{
            backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
              `${linearGradient(
                rgba(gradients.dark.main, 0.8),
                rgba(gradients.dark.state, 0.8)
              )}, url(${bgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "grid",
            placeItems: "center",
          }}
        />
        
        <Profile />
        <Proj/>
        <Contact />
        <Testimonials/>
        </MKBox>

      </div>
    </>
    
  );
}

export default Author;
