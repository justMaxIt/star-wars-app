import React, { useState, useEffect } from "react";

const api = "https://swapi.dev/api/";
function MainContent() {
  const [data, setData] = useState(null);

  useEffect(() => {
    if (!data) {
      fetch(`${api}starships/9/`)
        .then((res) => res.json())
        .then((res) => setData(res))
        .catch((error) => console.error(error));
    }
  });
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
