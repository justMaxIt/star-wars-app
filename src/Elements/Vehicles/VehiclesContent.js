import React from "react";
import VehicleItem from "./VehicleItem";

const VehiclesContent = (props) => {
  let { data } = props;

  if (data.results) {
    let searchData = data.results.map((item) => <VehicleItem item={item} />);

    return <div>{searchData}</div>;
  } else {
    return "find your vehicle";
  }
};

export default VehiclesContent;
