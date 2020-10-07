import React, { useState } from "react";

const PlanetsSearchMenu = (props) => {
  const [val, setVal] = useState(0);
  let { setPlanetNumber, setSearchString, searchString } = props;
  return (
    <div>
      <div>
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

export default PlanetsSearchMenu;
