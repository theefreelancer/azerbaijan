import React from "react";

function CardContent(props) {
  return (
    <div className="styleCardContent">
      <p className="styleCardTitle">{props.title}</p>
      <p className="styleLocationLabel">{props.location}</p>
      <p className="styleDescription">{props.description}</p>
    </div>
  );
}
export default CardContent;
