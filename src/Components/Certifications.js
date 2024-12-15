import React from "react";

export default function Certifications() {
    const certificates = [{
        courseName:"Create and Manage Cloud Resources",
        vendor:"Google",
        link:"https://partner.cloudskillsboost.google/public_profiles/a687dbef-36a6-4c6e-a9ed-489ed4bed652/badges/2551867"
    },
    {
        courseName:"Google Cloud Fundamentals: Core Infrastructure",
        vendor:"Google",
        link:"https://partner.cloudskillsboost.google/public_profiles/a687dbef-36a6-4c6e-a9ed-489ed4bed652/badges/1628798"
    },
    {
        courseName:"Microsoft Certified: Azure Fundamentals",
        vendor:"Microsoft",
        link:"https://learn.microsoft.com/en-us/users/saifali-7442/credentials/11a754b77333f7f2"
    },
    {
        courseName:"React Fronend Developer",
        vendor:"Edureka",
        link:"https://www.edureka.co/certificates/mycertificate/5271c92af88a55fe551d38e77b6a7149"
    },
    {
        courseName:"Python Certificate",
        vendor:"HackerRank",
        link:"https://www.hackerrank.com/certificates/5b3ef0d80123"
    },
    {
        courseName:"JavaScript Certificate",
        vendor:"HackerRank",
        link:"https://www.hackerrank.com/certificates/87ffaee6af9d"
    },]
  return (
    <section id="certification" className="container pt-4">
      <h1 className="fw-bold text-center">Certifications</h1>
      <div className="row d-flex justify-content-center gap-3 px-2">
        {certificates.map((element) => {
          return (
              <div key={element.courseName} className="card col-lg-3 p-0 col-md-5">
                <div className="card-body text-dark">
                  <blockquote className="blockquote mb-0">
                    <p>{element.courseName}</p>
                    <footer className="blockquote-footer">Obtained from: <cite className="text-muted fw-bold" title={element.vendor}>{element.vendor}</cite></footer>
                </blockquote>
                <a href={element.link} target="_blank" rel="noreferrer" className="btn btn-link">View certificate &gt; </a>
                </div>
              </div>
          );
        })}
      </div>
    </section>
  );
}
