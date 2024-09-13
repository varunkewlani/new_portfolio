import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import food from "../../Assets/Projects/food.png";
import travel from "../../Assets/Projects/travel.png";
import swiggy from "../../Assets/Projects/swiggy.jpeg"; // Add this line

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={food}
              isBlog={false}
              title="Food Delivery Website"
              description="It's an online fooding website for customers where a person can order its favourite things to eat delicious food, kind of restaurant website."
              ghLink="https://github.com/varunkewlani/food-delivery"
              demoLink="https://varunkewlani.github.io/food-delivery/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={travel}
              isBlog={false}
              title="TouristGuide Website"
              description="It's an online fooding website for customers where a person can order its favourite things to eat delicious food, kind of restaurant website."
              ghLink="https://github.com/varunkewlani/tourist-website-main"
              demoLink="https://varunkewlani.github.io/tourist-website-main/"
            />
          </Col>
          
          <Col md={4} className="project-card"> {/* Add this block */}
            <ProjectCard
              imgPath={swiggy}
              isBlog={false}
              title="Swiggy Clone"
              description="A clone of Swiggy, a popular food delivery platform, showcasing similar functionality and design."
              ghLink="https://github.com/varunkewlani/new_portfolio"
              demoLink="https://varunkewlani.github.io/new_portfolio/"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
