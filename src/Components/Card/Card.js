import React from "react";
import { cardImage } from "./CardContent";
import CardContent from "./CardContent";

function Card() {
  // This card component contains the main components that are bundled together.
  // This includes both the image, and the text values that are separate.
  return (
    <div style={{ width: 20 + "px" }}>
      <div className="styleCard">
        <CardContent image={{ cardImage }} />
      </div>
    </div>
  );
}

export default Card;
