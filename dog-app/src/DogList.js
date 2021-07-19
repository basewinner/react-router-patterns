import React from "react";
import { Link } from "react-router-dom";
import "./DogList.css";

function DogList({dogs}) {
  return (
    <div className="DogList">
      
          <h1 className="text-center">
            HELLOZ. WE HAVE DOGZ. CLICK ON THEM FOR MORE INFO.
          </h1>
      
      <div className="list-center">
        {dogs.map(d => (
          <div  key={d.name}>
            <img src={d.src} alt={d.name} />
            <h3 >
              <Link className="center" to={`/dogs/${d.name.toLowerCase()}`}>{d.name}</Link>
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DogList;
