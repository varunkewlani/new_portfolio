import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Techstack from "./Techstack";
import AboutCard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.6em", paddingBottom: "20px" }}>
              About <strong className="purple">Me</strong>
            </h1>
            <AboutCard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img
              src={laptopImg}
              alt="about"
              className="img-fluid"
              style={{ borderRadius: "15px", border: "2px solid #ddd" }}
            />
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <h1 className="project-heading">
              My <strong className="purple">Technical Skills</strong>
            </h1>
            <Techstack />
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <h1 className="project-heading">
              <strong className="purple">Tools</strong> I Use
            </h1>
            <Toolstack />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default About;
