import React from "react";
import "./card-list.css";
import { Card } from "../card/card";

const CardList =(props) => {
  return (
    <div className="card-list">
      {props.monster.map((monster) => (
        <Card key={monster.id} monster={monster}/>
      ))}
    </div>
  );
};

export default CardList;
