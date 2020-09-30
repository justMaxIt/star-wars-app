import React, { useState, useEffect } from "react";

const api = "https://swapi.dev/api/";

function MainContent(props) {
  const [data, setData] = useState([]);
  let { shipNumber } = props;

  useEffect(() => {
    fetch(`${api}starships/${shipNumber}/`)
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((error) => console.error(error));
  }, [shipNumber]);

  if (data.name) {
    return (
      <>
        Name: {data.name}
        <br /> <br />
        Model: {data.model}
        <br /> <br />
        Manufacturer: {data.manufacturer}
        <br /> <br />
        Starship class: {data.starship_class}
        <br /> <br />
      </>
    );
  }
  if (shipNumber === null) {
    return <>Find your ship</>;
  } else {
    return <>Ship does not exist or has been destroyed!</>;
  }
}

export default MainContent;
