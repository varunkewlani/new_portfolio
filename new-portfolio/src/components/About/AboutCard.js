import React from "react";
import Card from "react-bootstrap/Card";
import { FaCode, FaLaptopCode,} from "react-icons/fa";

function AboutCard() {
  return (
    <Card className="quote-card-view" style={{ border: "none", borderRadius: "15px", boxShadow: "0 4px 8px rgba(0,0,0,0.1)" }}>
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello, I'm <span className="purple">Varun Kewlani</span>, an aspiring Software Engineer based in <span className="purple">Allahabad, India</span>.
            <br /><br />
            I hold a Bachelor's degree in Technology from ABES Engineering College, specializing in Information Technology. My journey in tech has equipped me with a robust skill set in full-stack development.
            <br /><br />
            My professional experience includes:
          </p>
          <ul>
            <li className="about-activity">
              <FaCode /> Full-stack development using MERN stack
            </li>
            <li className="about-activity">
              <FaLaptopCode /> Creating responsive and interactive web applications
            </li>
            
          </ul>
          <p>
            I'm passionate about leveraging technology to solve real-world problems and am always eager to learn and adapt to new challenges in the ever-evolving tech landscape.
          </p>
          <p style={{ marginTop: "1rem" }}>
            My philosophy is:{" "}
            <span className="purple">
              "Continuous learning and innovation drive progress in technology."
            </span>
          </p>
          <footer className="blockquote-footer">Varun Kewlani</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;