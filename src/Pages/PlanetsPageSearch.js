import React, { useState, useEffect } from "react";

import PlanetsSearchContent from "../Elements/PlanetsSearch/PlanetsSearchContent";
import PlanetsSearchMenu from "../Elements/PlanetsSearch/PlanetsSearchMenu";
import "./../App.css";

const api = "https://swapi.dev/api/";

function PlanetsPageSearch() {
  const [planetNumber, setPlanetNumber] = useState(null);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`${api}planets/${planetNumber}/`)
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((error) => console.error(error));
  }, [planetNumber]);

  return (
    <div className="planets-page">
      <PlanetsSearchMenu setPlanetNumber={setPlanetNumber} />
      <PlanetsSearchContent data={data} />
    </div>
  );
}

export default PlanetsPageSearch;
