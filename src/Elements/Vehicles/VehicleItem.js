import React from "react";

const VehicleItem = (props) => {
  return (
    <div>
      <ul>
        <li>{props.planet.name}</li>
      </ul>
    </div>
  );
};

export default VehicleItem;
