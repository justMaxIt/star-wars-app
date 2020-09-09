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
  console.log(data);
  // for (let i = 0; i <= data.length; i++) {
  //   if (i%2 != 1){setData(data[])}

  return (
    <>

      {/* if (index%2 != 1){ */}
      <ul>
        {data.map((el, index) => (
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
