import React, { useState, useEffect } from "react";

import PlanetsSearchContent from "../Elements/PlanetsSearch/PlanetsSearchContent";
import PlanetsSearchMenu from "../Elements/PlanetsSearch/PlanetsSearchMenu";
import "./../App.css";

const api = "https://swapi.dev/api/";

function PlanetsPageSearch() {
  const [planetNumber, setPlanetNumber] = useState(null);
  const [searchString, setSearchString] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    if (searchString !== "") {
      fetch(`${api}planets/?search=${searchString}`)
        .then((res) => res.json())
        .then((res) => setData(res))
        .catch((error) => console.error(error));
    }

    if (planetNumber !== null) {
      fetch(`${api}planets/${planetNumber}/`)
        .then((res) => res.json())
        .then((res) => setData(res))
        .catch((error) => console.error(error));
    }
  }, [planetNumber, searchString]);

  console.log(searchString, data);
  return (
    <div className="planets-page">
      <PlanetsSearchMenu
        setPlanetNumber={setPlanetNumber}
        setSearchString={setSearchString}
        searchString={searchString}
      />
      <PlanetsSearchContent data={data} />
    </div>
  );
}

export default PlanetsPageSearch;
