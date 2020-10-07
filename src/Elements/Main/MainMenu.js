import React, { useState } from "react";

function MainMenu(props) {
  const [input, setInput] = useState(0);
  let { setShipNumber } = props;

  return (
    <div>
      <input
        className="main-input"
        type="number"
        placeholder="search"
        onChange={(e) => setInput(e.target.value)}
      />
      <button className="main-button" onClick={() => setShipNumber(input)}>
        Ship information
      </button>
    </div>
  );
}

export default MainMenu;
