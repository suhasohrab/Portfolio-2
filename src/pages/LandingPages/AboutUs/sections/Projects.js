import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import MKTypography from "components/MKTypography";
import Musafir from "assets/images/Musafir.png";
import Weather from "assets/images/Weather.png";
import Pakistan from "assets/images/Pakistan.png";
import iCoder from "assets/images/iCoder.png";
import expense from "assets/images/expense.png";
import gynaika from "assets/images/gynaika.png";
import ProjectCard from "./ProjectCards";

function Projects() {
  return (
    <div id="work">
    <Container fluid className="project-section">
      <Container>
      <MKTypography variant="h3" color="dark">
          My Recent Works </MKTypography>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Musafir}
              isBlog={false}
              title="Musafir"
              description="A hotel reservation app created using React which helps tourist book hotels in their desired destination"
              ghLink="https://github.com/suhasohrab/Musafir-App"
              demoLink="https://first-app-877fd.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gynaika}
              isBlog={false}
              title="Gynaika"
              description="A healthcare app created for women in order to give them more control over their health and lives. Made using PHP, MYSQL"
              ghLink=""
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Weather}
              isBlog={false}
              title="Weather App"
              description="A Weather App created using ReactJS, OpenWeatherAPI, and GeoAPI to learn about current weather conditions and future weather forecast as well"
              demoLink="https://weather-react-app-5f270.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={expense}
              isBlog={false}
              title="Expense Tracker App"
              description="A react app created in order to keep a track of your expenses"
              ghLink="https://github.com/suhasohrab/expense_tracker/tree/master"
              demoLink="http://tasty-lawyer.surge.sh/"
            />
          </Col>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Pakistan}
              isBlog={false}
              title="Visit Pakistan"
              description="A single page website created to attract tourist to Pakistan - created using HTML, CSS, and JS."
              ghLink=""
              demoLink="same-veil.surge.sh"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={iCoder}
              isBlog={false}
              title="iCoder Bootstrap Website"
              description="A multi page website created using Bootstrap"
              ghLink=""
              demoLink="http://meek-rod.surge.sh/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
    </div>
  );
}

export default Projects;
