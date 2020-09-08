import React, { useState } from "react";
import MainContent from "../Elements/MainContent";
import MainMenu from "../Elements/MainMenu";

function MainPage() {
  const [shipNumber, setShipNumber] = useState(null);

  return (
    <div className="main-page">
      <MainMenu setShipNumber={setShipNumber} />
      <MainContent shipNumber={shipNumber} />
    </div>
  );
}

export default MainPage;
