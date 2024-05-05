import React from "react";
import Timeline from "./Timeline";

export default function Experience() {
    const workExperience = {type:'Experiences', data:[
        {
            title:"Full Stack Developer",
            organization:"TATA Consultancy Services",
            date:"August 2021 - Current",
            detials:"As a full stack developer, currently responsible for gathering requirements, refining processes, and creating technical flows based on project needs. Actively involved in the final build of project features, ensuring alignment with client expectations and project objectives."
        },
        {
            title:"Freelancer",
            date:"January 2021",
            detials:"As a freelance developer, provided tailored solutions to clients' needs. Guided college students, fostering innovation and skill development in academic projects."
        },
        {
            title:"Software Development",
            date:"July 2020",
            detials:"Embarked on Software Development journey, honing coding, problem-solving, and collaboration skills. Built diverse personal projects, leveraging creativity for efficient solutions driving technological advancement."
        },
    ]}

    const educationQualification = {type:'Education', data:[
        {
            title:"Masters in Computer Applications",
            date:"January 2022 - April 2024",
            detials:"Completed Masters in Computer Applications from SASTRA, Chennai, INDIA"
        },
        {
            title:"Bachelor in Computer Applications",
            date:"July 2018 - August 2021",
            detials:"Completed Bachelor in Computer Applications in 2017 from CAGC, Kolkata, INDIA"
        },
    ]}
  return (
    <div id='resume' className="container timeline-container">
        <Timeline timelineData={workExperience}></Timeline>
        <Timeline timelineData={educationQualification}></Timeline>
    </div>
  );
}
