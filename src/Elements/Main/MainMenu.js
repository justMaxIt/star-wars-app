import React, { useState } from "react";

function MainMenu(props) {
  const [input, setInput] = useState(0);
  let { setShipNumber } = props;

  return (
    <div className="main-menu">
      <input
        type="number"
        placeholder="search"
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={() => setShipNumber(input)}> Ship information </button>
    </div>
  );
}

export default MainMenu;
