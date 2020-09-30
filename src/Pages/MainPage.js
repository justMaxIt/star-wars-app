import React, { useState } from "react";
import MainContent from "../Elements/Main/MainContent";
import MainMenu from "../Elements/Main/MainMenu";

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
