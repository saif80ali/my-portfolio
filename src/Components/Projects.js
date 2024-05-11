import React from "react";
import hotel from "../assets/Projects/Hotel-management.png";
import newsMonkey from "../assets/Projects/NewsMonkey.png";
import examinationSystem from "../assets/Projects/OnlineExaminationSystem.png";
import toDoManager from "../assets/Projects/ToDoManager.png";
import voiceAssistant from "../assets/Projects/Voice-Assistant.png";
import ticketBookingApp from "../assets/Projects/TicketBookingApp.png";
import EachCarousel from "./EachCarousel";

export default function Projects() {
  const projects = [
    {
      image: newsMonkey,
      title: "News Monkey",
      description:
        "Streamlined app for real-time news updates.",
    },
    {
      image: hotel,
      title: "Hotel Management",
      description:
        "Efficient hotel management app with seamless guest communication.",
    },
    {
      image: toDoManager,
      title: "To do Manager",
      description:
        "Efficient task manager for daily productivity.",
    },
    {
      image: voiceAssistant,
      title: "Voice Assistant",
      description:
        "Voice-controlled app for seamless task execution.",
    },
    {
      image: ticketBookingApp,
      title: "Movie Ticket Booking",
      description:
        "Effortless app for booking movie tickets anytime, anywhere.",
    },
    {
      image: examinationSystem,
      title: "Online Examination System",
      description:
        "Efficient platform for secure online assessments and exams",
    },
  ];
  return (
    <div id="projects" className="container pt-4">
      <div
        id="carouselExampleAutoplaying"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          {projects.map((element, index) => {
            return (
              <EachCarousel
                key={element.title + index}
                index={index}
                title={element.title}
                description={element.description}
                image={element.image}
              ></EachCarousel>
            );
          })}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon carousel-icons"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon carousel-icons"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
