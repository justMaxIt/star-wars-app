import React from "react";
import PlanetsContent from "../Elements/PlanetsContent";
import "./../App.css";
// import ReactDOM from "react-dom";
// import Pagination from "rc-pagination";

function PlanetsPage() {
  return (
    <div className="planets-page">
      {/* <Pagination simple defaultCurrent={1} total={50} /> */}
      <PlanetsContent />
    </div>
  );
}
// ReactDOM.render(<PlanetsContent />, document.getElementById("root"));
export default PlanetsPage;
