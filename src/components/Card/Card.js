import React from "react";
import "./Card.css";

const Card = props => (
  <div onClick={() => props.clickCard(props)} className="card">
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
  </div>
);

export default Card;