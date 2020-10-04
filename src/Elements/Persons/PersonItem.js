import React from "react";
// import "./../../App.css";
import MainContent from "../Main/MainContent";

const PersonItem = (props) => {
  // console.log(props);
  // props.data?setApi
  // let starshipElements = props.data?.starships.map((starship) => (
  //   <MainContent key={starship.toString()} shipApi={starship} />
  // ));
  // console.log(starshipElements);
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
      {/* <div className="personShip">{starshipElements}</div> */}
    </div>
  );
};

export default PersonItem;
