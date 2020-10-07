import React, { useState } from "react";
import MainContent from "../Elements/Main/MainContent";
import MainMenu from "../Elements/Main/MainMenu";

function MainPage() {
  const [shipNumber, setShipNumber] = useState(null);

  return (
    <div className="main-page">
      <div className="main-menu">
        <MainMenu setShipNumber={setShipNumber} />
      </div>
      <div className="main-content">
        <MainContent shipNumber={shipNumber} />
      </div>
    </div>
  );
}

export default MainPage;
