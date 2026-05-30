import React from "react";
import Timeline from "./Timeline";

export default function Experience() {
  const workExperience = {
    type: "Experiences",
    data: [
      {
        title: "Consultant",
        organization: "Deloitte USI",
        date: "September 2025 - Present",
        details:
          "Consultant specializing in Generative AI, Agentic AI, and Full-Stack Engineering. Lead the development of enterprise-grade AI platforms using AWS AI and agentic services, enabling clients to build, deploy, and scale custom AI agents and intelligent automation solutions. Design and implement end-to-end architectures, including multi-agent systems, workflow orchestration, API integrations, and cloud-native deployments. Partner with cross-functional teams and business stakeholders to translate complex requirements into scalable technical solutions. Alongside AI platform development, contribute across the full-stack ecosystem, delivering high-performance backend services and modern frontend experiences using Python, Node.js, TypeScript, JavaScript, React, and Angular. Focused on building secure, maintainable, and business-driven solutions that accelerate digital transformation and AI adoption.",
      },
      {
        title: "Software Developer",
        organization: "TATA Consultancy Services",
        date: "August 2021 - September 2025",
        details:
          "As a software developer, currently responsible for gathering requirements, refining processes, and creating technical flows based on project needs. Actively involved in the final build of project features, ensuring alignment with client expectations and project objectives.",
      },
      {
        title: "Freelancer",
        date: "January 2021",
        details:
          "As a freelance developer, provided tailored solutions to clients' needs. Guided college students, fostering innovation and skill development in academic projects.",
      },
    ],
  };

  const educationQualification = {
    type: "Education",
    data: [
      {
        title: "Masters in Computer Applications",
        date: "January 2022 - April 2024",
        details:
          "Completed Masters in Computer Applications from SASTRA, Chennai, INDIA",
      },
      {
        title: "Bachelor in Computer Applications",
        date: "July 2018 - August 2021",
        details:
          "Completed Bachelor in Computer Applications in 2017 from CAGC, Kolkata, INDIA",
      },
    ],
  };
  return (
    <div id="resume" className="container timeline-container">
      <Timeline timelineData={workExperience}></Timeline>
      <Timeline timelineData={educationQualification}></Timeline>
    </div>
  );
}
