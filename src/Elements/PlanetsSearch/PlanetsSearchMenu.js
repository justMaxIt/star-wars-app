import React, { useState } from "react";
// import "./../App.css";

const PlanetsSearchMenu = (props) => {
  const [val, setVal] = useState(0);
  // const [personId, setPersonId] = useState(1);
  let { setPlanetNumber } = props;
  return (
    <div>
      <div className="main-menu">
        <input
          type="number"
          placeholder="Enter planet id"
          onChange={(e) => setVal(e.target.value)}
        />
        <input
          type="submit"
          value="Find"
          onClick={() => {
            setPlanetNumber(val);
          }}
        />
        {/* <input
          className="search-textarea"
          type="text"
          placeholder="Search"
          onChange={(e) => setSearchString(e.target.value)}
          value={searchString}
        /> */}
      </div>
    </div>
  );
};

// const { setSearchString, searchString, setPersonId } = props;
// const [val, setVal] = useState(0);
// const [searchString, setSearchString] = useState("");
// const [personId, setPersonId] = useState(1);
// const searchingPerson = (url) => {
//   setApi(url);
//   setSearchString("");
// };

//   const searchArr = searchList.map((item) => (
//     <li key={item.name} onClick={() => searchingPerson(item.url)}>
//       {item.name}
//     </li>
//   ));
//   useEffect(() => {
//     fetch(`https://swapi.dev/api/people/?search=${searchString}`)
//       .then((res) => res.json())
//       .then((res) => setSearchList(res.results))
//       .catch((err) => console.error(err));
//   }, [searchString]);

//   useEffect(() => {
//     fetch(api || `https://swapi.dev/api/people/${personId}/`)
//       .then((res) => res.json())
//       .then((res) => setData(res))
//       .catch((err) => console.error(err));
//   }, [personId, api]);
//   return (
//     <div>
//       <div className="main-menu">
//         <input
//           type="number"
//           placeholder="Enter person id"
//           onChange={(e) => setVal(e.target.value)}
//         />
//         <input
//           type="submit"
//           value="Find"
//           onClick={() => {
//             setPersonId(val);
//           }}
//         />
//         <input
//           className="search-textarea"
//           type="text"
//           placeholder="Search"
//           onChange={(e) => setSearchString(e.target.value)}
//           value={searchString}
//         />
//       </div>
//     </div>
//   );
// };

export default PlanetsSearchMenu;
