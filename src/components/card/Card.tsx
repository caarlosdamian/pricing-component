import React, { useContext } from "react";
import { Slide } from "react-awesome-reveal";
import { Subcription } from "../../common/types";
import { SubContext } from "../../context/subContext";
import "./Card.scss";

export const Card = ({ item }: { item: Subcription }) => {
 const { setSubType, subType } = useContext(SubContext);
 const { anual, characteristic, id, montly, title } = item;
 return (
  <Slide triggerOnce>
   <div className={`card ${title === "Professional" ? "professional" : ""}`}>
    <div className="card__header">
     <h2 className={`title ${title === "Professional" ? "professional" : ""}`}>
      {title}
     </h2>
     <span className="price">
      <strong>$</strong>
      {subType ? anual : montly}
     </span>
    </div>
    <div className="card__features">
     {characteristic.map((item) => (
      <span key={item.id} className="feature">
       {item.name}
      </span>
     ))}
    </div>
    <button className="card__button">LEARN MORE</button>
   </div>
  </Slide>
 );
};
