/* eslint-disable react/destructuring-assignment */
import React from "react";
import Card from "react-bootstrap/Card";
import MKButton from "components/MKButton";
import { BsGithub } from "react-icons/bs";
import MKTypography from "components/MKTypography";

function ProjectCards(props) {
        <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <MKTypography>{props.title}</MKTypography>
        <MKTypography>{props.description} </MKTypography>
        <MKButton color="info" href={props.ghLink} target="_blank">
          <BsGithub /> &nbsp;
        </MKButton>
        {"\n"}
        {"\n"}

      </Card.Body>
    </Card>
  
}
export default ProjectCards;
