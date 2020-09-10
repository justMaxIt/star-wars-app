import React, { useState, useEffect } from "react";

const api = "https://swapi.dev/api/";

function PlanetsContent(props) {
  const [data, setData] = useState([]);
  const [numberPlanetsPage, setNumberPlanetsPage] = useState("");

  useEffect(() => {
    fetch(`${api}planets/${numberPlanetsPage}`)
      .then((res) => res.json())
      .then((res) => setData(res.results))
      .catch((error) => console.error(error));
  }, [numberPlanetsPage]);
  console.log(data);
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
      <button onClick={() => setNumberPlanetsPage("?page=1")}>
        First page
      </button>
      <br /> <br />
      <button onClick={() => setNumberPlanetsPage("?page=2")}>
        Second page
      </button>
      <br /> <br />
      <button onClick={() => setNumberPlanetsPage("?page=3")}>
        Third page
      </button>
      <br /> <br />
      <button onClick={() => setNumberPlanetsPage("?page=4")}>
        Fourth page
      </button>
      <br /> <br />
      <button onClick={() => setNumberPlanetsPage("?page=5")}>
        Fifth page
      </button>
      <br /> <br />
      <button onClick={() => setNumberPlanetsPage("?page=6")}>
        Sixth page
      </button>
    </>
  );
}

export default PlanetsContent;
