//import { useState } from "react";
import Stats from "./Stats.jsx";

const SinglePokemon = (props) => {

  return (
    <div key={props.id} className="pkCards">

      {/* name and # */}
      <div className="top-info">
        <img className="thumbnails" src={props.imageThumb} alt={props.nameEng} />
        <h2>{props.nameEng}</h2>
        <span>#{props.id.toString().padStart(3,'0')}</span>
      </div>

      {/* types */}
      <div className="types" >
      {props.type.map((eachType) => {
        return (
          <p key={eachType} className={`type-box ${eachType}`} >
            {eachType}
          </p>
        );
      })}
      </div>
      
      {/* attack and defense point stats */}
      <Stats atk={props.atk} def={props.def} spec={props.spec} speed={props.speed} /> 
    </div>
  );
};

export default SinglePokemon;