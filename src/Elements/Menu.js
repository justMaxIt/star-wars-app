import React from "react";
import { Link, useLocation } from "react-router-dom";

function Menu() {
  let location = useLocation();

  return (
    <div className="menu">
      <Link className={location.pathname === "/" ? "active" : ""} to="/">
        Main
      </Link>
      <Link
        className={location.pathname === "/persons" ? "active" : ""}
        to="/persons"
      >
        Persons
      </Link>
    </div>
  );
}

export default Menu;
