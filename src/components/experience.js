import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

function WorkExperience() {
  const experiences = [
    {
      role: "IT Recruiter/ Technical Consultant",
      duration: "Jul 2023 - Mar 2024",
      description: [
        "Spearheaded the development of an in-house candidate tracking system using HTML, CSS, JavaScript, React, Node.js, and REST APIs, automating workflows and reducing manual data entry by 30%.",
        "Designed and implemented scalable, modular components for the frontend, ensuring seamless API integration and real-time data flow between the backend and client-side applications that enhanced user experience.",
      ],
    },
    {
      role: "Software Developer Intern",
      duration: "May 2023 - Jul 2023",
      description: [
        "Developed and optimized responsive web applications using HTML, CSS, and ReactJS, enhancing user experience and improving front-end performance by 20%.",
        "Engineered backend APIs using Node.js, accelerating data processing speed by 20%. Translated design concepts into interactive user interfaces, ensuring seamless user interactions and responsiveness.",
      ],
    },
  ];

  return (
    <Container fluid className="work-experience-section">
      <h2 className="section-title">Work Experience</h2>
      {experiences.map((exp, index) => (
        <Row key={index} className="work-experience-row">
          <Col md={6} className="mb-4">
            <Card className="experience-card">
              <Card.Body>
                <Card.Title className="role-title">
                  {exp.role}
                </Card.Title>
                <Card.Subtitle className="duration">
                  {exp.duration}
                </Card.Subtitle>
                <ul className="experience-description">
                  {exp.description.map((desc, i) => (
                    <li key={i}>{desc}</li>
                  ))}
                </ul>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      ))}
    </Container>
  );
}

export default WorkExperience;
