import React from "react";
import "./Packages.scss";

import Card from "../card/Card";

const cards = [
  {
    title: "VIP Package",
    details: ["Includes services of the Premium package", "Financial Modeling"],
    price: "500",
  },
  {
    title: "Premium Package",
    details: [
      "Includes services of the Standard package",
      "Weekly meeting to discuss about future plans",
    ],
    price: "300",
  },
  {
    title: "Standard Package",
    details: ["Auditing service"],
    price: "250",
  },
];

const Packages = () => {
  return (
    <div className="packages">
      <h2 className="packages__h2">Our Packages</h2>

      <div className="packages__cards">
        {cards.map((card) => (
          <Card title={card.title} details={card.details} price={card.price} />
        ))}
        {/* <Card />
        <Card />
        <Card /> */}
      </div>
    </div>
  );
};

export default Packages;
