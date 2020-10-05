import React, { useState } from "react";

const VehiclesMenu = (props) => {
  const [val, setVal] = useState(0);

  let { setVehicleString } = props;
  return (
    <div>
      <div className="main-menu">
        <input
          type="text"
          placeholder="Search"
          onChange={(e) => setVal(e.target.value)}
        />
        <input
          type="submit"
          value="Find"
          onClick={() => {
            setVehicleString(val);
            localStorage.setItem("SWA-vehicle-search", JSON.stringify(val));
          }}
        />
      </div>
    </div>
  );
};

export default VehiclesMenu;
