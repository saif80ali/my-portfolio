import React from "react";

export default function EachCarousel(props) {
  return (
    <div className={"carousel-item " + (props.index === 0 ? "active":"" )}>
      <img src={props.image} className="d-block" alt="Project Screenshot" />
    </div>
  );
}
