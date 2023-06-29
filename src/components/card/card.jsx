import React from "react";
import './card.css';
export const Card = (props) =>(
    <div className="card-container">
        <img alt="images" src={`https://robohash.org/${props.monster.id}?set=set2&size=150x150`}/>
        <h2>{props.monster.name}</h2>
        <span>{props.monster.phone}</span>
        <p>{props.monster.email}</p>
    </div>
)