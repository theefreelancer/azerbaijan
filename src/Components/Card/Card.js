import React from "react";
import CardImage from "./CardImage";
import CardContent from "./CardContent";

function Card(props) {
  return (
    <div style={{ width: props.width + "px" }}>
      <div className="styleCard">
        <CardImage image={props.image} width={props.width} />
        <CardContent
          title={props.title}
          location={props.location}
          description={props.description}
        />
      </div>
    </div>
  );
}
Card.defaultProps = {
  width: 350,
  title: "Template - Card Title",
  location: "Location label",
  description: "Template description textbox",
};
export default Card;
