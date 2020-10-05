import React, { useState, useEffect } from "react";
import VehiclesContent from "../Elements/Vehicles/VehiclesContent";
import VehiclesMenu from "../Elements/Vehicles/VehiclesMenu";
import "./../App.css";

const api = "https://swapi.dev/api/";

function VehiclesPage() {
  const [vehicleString, setVehicleString] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    setVehicleString(JSON.parse(localStorage.getItem("SWA-vehicle-search")));
    if (vehicleString !== "") {
      fetch(`${api}vehicles/?search=${vehicleString}`)
        .then((res) => res.json())
        .then((res) => setData(res))
        .catch((error) => console.error(error));
    }
  }, [vehicleString]);

  return (
    <div className="planets-page">
      <VehiclesMenu setVehicleString={setVehicleString} />
      <VehiclesContent data={data} />
    </div>
  );
}

export default VehiclesPage;
