import React from "react";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light nav-transparent">
    <div className="container">
      <a className="navbar-brand fw-bold" href="/">Saif Ali</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse justify-content-around" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <a className="nav-link active" aria-current="page" href="/">About</a>
          <a className="nav-link" href="/">Projects</a>
          <a className="nav-link" href="/">Skills</a>
          <a className="nav-link" href="/">Resume</a>
          <a className="nav-link" href="/">Contact</a>
        </div>
      </div>
    </div>
  </nav>
  );
}
