import React, { useState } from "react";

const VehiclesMenu = (props) => {
  const [val, setVal] = useState(0);
  // const [personId, setPersonId] = useState(1);
  let { setPlanetNumber, setSearchString, searchString } = props;
  return (
    <div>
      <div className="main-menu">
        <input
          type="number"
          placeholder="Enter planet id"
          onChange={(e) => setVal(e.target.value)}
        />
        <input
          type="submit"
          value="Find"
          onClick={() => {
            setPlanetNumber(val);
          }}
        />
        <input
          className="search-textarea"
          type="text"
          placeholder="Search"
          onChange={(e) => setSearchString(e.target.value)}
          value={searchString}
        />
      </div>
    </div>
  );
};

export default VehiclesMenu;
