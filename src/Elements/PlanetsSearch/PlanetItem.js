import React from "react";

const PlanetItem = (props) => {
  return (
    <div>
      <ul>
        <li>{props.planet.name}</li>
      </ul>
    </div>
  );
};

export default PlanetItem;
