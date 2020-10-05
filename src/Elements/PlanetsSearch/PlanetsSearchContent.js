import React from "react";
import PlanetItem from "./PlanetItem";

const PlanetsSearchContent = (props) => {
  let { data } = props;

  if (data.name) {
    return (
      <div>
        Name: {data.name}
        <br /> <br />
        climate: {data.climate}
        <br /> <br />
        population: {data.population}
        <br /> <br />
        diameter: {data.diameter}
        <br /> <br />
      </div>
    );
  }
  if (data.results) {
    let searchData = data.results.map((planet) => (
      <PlanetItem planet={planet} />
    ));

    return <div>{searchData}</div>;
  } else {
    return "find your planet";
  }
};

export default PlanetsSearchContent;
