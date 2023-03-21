import React, { useContext } from "react";
import { bgTop } from "../assets";
import { Card } from "../components/card/Card";
import { SubContext } from "../context/subContext";
import { SubInfo } from "../utils/data";
import "./App.scss";

export const App = () => {
 const { setSubType, subType } = useContext(SubContext);
 return (
  <main className="app">
   <img src={bgTop} alt="bgTop" className="top-bg" />
   <div className="container">
    <section id="header" className="container__header">
     <h1 className="header">Our Pricing</h1>
     <div className="toggle__container">
      <span>Annually</span>
      <div className="toggle__wrapper" onClick={() => setSubType(!subType)}>
       <div className={`toggle__cicle ${subType ? "anually" : ""}`}></div>
      </div>
      <span>Monthly</span>
     </div>
    </section>
    <section id="features" className="container__features">
     {SubInfo.map((item) => (
      <Card key={item.id}  item={item}/>
     ))}
    </section>
   </div>
  </main>
 );
};
