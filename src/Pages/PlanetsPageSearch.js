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

  return (
    <div className="planets-search-page">
      <div className="planets-search-menu">
        <PlanetsSearchMenu
          setPlanetNumber={setPlanetNumber}
          setSearchString={setSearchString}
          searchString={searchString}
        />
      </div>
      <div className="planets-search-content">
        <PlanetsSearchContent data={data} />
      </div>
    </div>
  );
}

export default PlanetsPageSearch;
