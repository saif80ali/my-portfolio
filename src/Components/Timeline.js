import React from "react";
import PropTypes from "prop-types";

export default function Timeline({ timelineData }) {
  return (
    <section className="pt-4">
      <h1 className="fw-bold">{timelineData.type}</h1>
      <ul className="timeline-with-icons">
        {timelineData.data.length &&
          timelineData.data.map((element) => {
            return (
              <li key={element.title} className="timeline-item mb-4">
                <span className="timeline-icon">
                    <img src={element.iconPath} />
                </span>

                <h3 className="fw-bold">{element.title}</h3>
                {element.organization && (
                  <p className="text-muted mb-2 fw-bold">
                    {element.organization}
                  </p>
                )}
                <p className="text-muted mb-2 fw-bold">{element.date}</p>
                <p className="text-muted">{element.detials}</p>
              </li>
            );
          })}
      </ul>
    </section>
  );
}
Timeline.propTypes = {
  timelineData: PropTypes.exact({
    type: PropTypes.string,
    data: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string,
        date: PropTypes.string,
        organization: PropTypes.string,
        detials: PropTypes.string,
      })
    ),
  }),
};
