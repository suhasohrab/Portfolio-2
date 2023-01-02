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
import team1 from "assets/images/team-5.jpg";
// Material Kit 2 React components
import MKBox from "components/MKBox";

// Material Kit 2 React examples
import HorizontalTeamCard from "examples/Cards/TeamCards/HorizontalTeamCard";

function Information() {
  return (
    <MKBox component="section" py={12}>
      <Container>
        <Grid container spacing={3} alignItems="center">
          <Grid item sm={12} lg={12}>
            <Grid container justifyContent="flex-start">
              <Grid item sm={12} md={12}>
                <MKBox mb={5}>
                <HorizontalTeamCard
                name="About Me"
                image={team1}
                position={{ color: "info", label: "UI Designer" }}
                description="Artist is a term applied to a person who engages in an activity deemed to be an art."
              />
                </MKBox>
              </Grid>
             </Grid>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Information;
