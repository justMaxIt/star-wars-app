import React, { useState, useEffect } from "react";
import VehiclesContent from "../Elements/Vehicles/VehiclesContent";
import VehiclesMenu from "../Elements/Vehicles/VehiclesMenu";
import "./../App.css";

const api = "https://swapi.dev/api/";

function VehiclesPage() {
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
    <div className="planets-page">
      <VehiclesMenu
        setPlanetNumber={setPlanetNumber}
        setSearchString={setSearchString}
        searchString={searchString}
      />
      <VehiclesContent data={data} />
    </div>
  );
}

export default VehiclesPage;
