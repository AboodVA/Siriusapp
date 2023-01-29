import React from "react";
import "./Card.scss";
import { GrRadialSelected } from "react-icons/gr";
import { IconContext } from "react-icons";

const Card = ({ title, details, price }) => {
  return (
    <div className="card">
      <h3 className="card__heading">{title}</h3>
      <hr />
      <div className="card__details">
        {details.map((detail) => (
          <p>
            <GrRadialSelected />
            {detail}
          </p>
        ))}
        {/* <p>
          <GrRadialSelected />
          Financial Modeling
        </p>
        <p>
          {" "}
          <GrRadialSelected />
          Lorem ipsum dolor sit ame
        </p>
        <p>
          {" "}
          <GrRadialSelected />
          Lorem ipsum dolor sit ame
        </p>
        <p>
          <GrRadialSelected />
          Lorem ipsum dolor sit ame
        </p> */}
      </div>

      <hr />

      <h4 className="card__price">{price} JOD</h4>

      <div className="card__button-container">
        <button className="card__button">Select</button>
      </div>
    </div>
  );
};

export default Card;
