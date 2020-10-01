import React, { useState } from "react";
// import "./../App.css";
// import MainContent from "../Main/MainContent";

const PlanetsSearchContent = (props) => {
  let { data } = props;

  if (data.name) {
    return (
      <div>
        Name: {data.name}
        <br /> <br />
      </div>
    );
  } else {
    return "dsfvswfwe";
  }
};

//   return (
//     <div>
//       <div>
//         Name: {props.data?.name}
//         <br />
//         Birth date: {props.data?.birth_year}
//         <br />
//         Gender: {props.data?.gender}
//         <br />
//         Height: {props.data?.height}
//         <br />
//         Skin color: {props.data?.skin_color}
//         <br />
//       </div>
//       <div className="personShip">{starshipElements}</div>
//     </div>
//   );
// };
// const PlanetsSearchContent = (props) => {
//   const { searchArr, searchString, data } = props;

//   if (searchString !== "") {
//     return <div className="search-block">{searchArr}</div>;
//   } else {
//     if (data?.name) {
//       return (
//         <div>
//           <PersonSearchItem data={data} />
//         </div>
//       );
//     } else {
//       return (
//         <div className="noStarShip text-wrap">
//           <div>Person not found</div>
//         </div>
//       );
//     }
//   }
// };

export default PlanetsSearchContent;
