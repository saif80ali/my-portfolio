import React from "react";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light nav-transparent">
    <div className="container">
      <a className="navbar-brand fw-bold" href="/">Saif Ali</a>
      <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse justify-content-around" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <a className="nav-link fw-bold" aria-current="page" href="#about">About</a>
          <a className="nav-link fw-bold" href="#projects">Projects</a>
          <a className="nav-link fw-bold" href="#resume">Resume</a>
          <a className="nav-link fw-bold" href="#contact">Contact</a>
        </div>
      </div>
    </div>
  </nav>
  );
}
