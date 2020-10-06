import React from "react";

const VehicleItem = (props) => {
  return (
    <div>
      <ul>
        <li>
          Name: {props.item.name}
          <br />
          Model: {props.item.model}
        </li>
      </ul>
    </div>
  );
};

export default VehicleItem;
