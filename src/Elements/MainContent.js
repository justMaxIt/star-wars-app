import React, { useState, useEffect } from "react";

const api = "https://swapi.dev/api/";

function MainContent(props) {
  const [data, setData] = useState(null);
  let { shipNumber } = props;

  useEffect(() => {
    fetch(`${api}starships/${shipNumber}/`)
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((error) => console.error(error));
  }, [shipNumber]);

  return (
    <>
      Name: {data && data.name}
      <br /> <br />
      Model: {data && data.model}
      <br /> <br />
      Manufacturer: {data && data.manufacturer}
      <br /> <br />
      Starship class: {data && data.starship_class}
      <br /> <br />
    </>
  );
}

export default MainContent;
