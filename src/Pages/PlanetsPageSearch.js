import React from "react";

import PlanetsSearchContent from "../Elements/PlanetsSearch/PlanetsSearchContent";
import PlanetsSearchMenu from "../Elements/PlanetsSearch/PlanetsSearchMenu";
import "./../App.css";

function PlanetsPageSearch() {
  return (
    <div className="planets-page">
      <PlanetsSearchMenu />
      <PlanetsSearchContent />
    </div>
  );
}

export default PlanetsPageSearch;
