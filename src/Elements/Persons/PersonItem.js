import React from "react";

const PersonItem = (props) => {
  return (
    <div>
      <div>
        Name: {props.data?.name}
        <br />
        Birth date: {props.data?.birth_year}
        <br />
        Gender: {props.data?.gender}
        <br />
        Height: {props.data?.height}
        <br />
        Skin color: {props.data?.skin_color}
        <br />
      </div>
    </div>
  );
};

export default PersonItem;
