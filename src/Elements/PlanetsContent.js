import React, { useState, useEffect } from "react";

const api = "https://swapi.dev/api/";

function PlanetsContent(props) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`${api}planets/`)
      .then((res) => res.json())
      .then((res) => setData(res.results))
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      <ul>
        {data
          .filter((e, ind) => ind % 2 !== 1)
          .map((el) => (
            <li key={el.name}>
              Name: {el.name}
              <br />
              Rotation Period: {el.rotation_period}
              <br />
              Orbital Period: {el.orbital_period}
            </li>
          ))}
      </ul>
    </>
  );
}

export default PlanetsContent;
