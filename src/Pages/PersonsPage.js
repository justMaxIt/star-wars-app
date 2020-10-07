import React, { useState, useEffect } from "react";
import PersonsMenu from "../Elements/Persons/PersonsMenu";
import PersonsContent from "../Elements/Persons/PersonsContent";

const PersonsPage = () => {
  const [data, setData] = useState(null);
  const [searchList, setSearchList] = useState([]);
  const [searchString, setSearchString] = useState("");
  const [personId, setPersonId] = useState(1);
  const [api, setApi] = useState("");

  const searchingPerson = (url) => {
    setApi(url);
    setSearchString("");
  };

  const searchArr = searchList.map((item) => (
    <li key={item.name} onClick={() => searchingPerson(item.url)}>
      {item.name}
    </li>
  ));

  useEffect(() => {
    fetch(`https://swapi.dev/api/people/?search=${searchString}`)
      .then((res) => res.json())
      .then((res) => setSearchList(res.results))
      .catch((err) => console.error(err));
  }, [searchString]);

  useEffect(() => {
    fetch(api || `https://swapi.dev/api/people/${personId}/`)
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((err) => console.error(err));
  }, [personId, api]);

  return (
    <div className="person-page">
      <div className="person-menu">
        <PersonsMenu
          setSearchList={setSearchList}
          setSearchString={setSearchString}
          searchString={searchString}
          setData={setData}
          setPersonId={setPersonId}
        />
      </div>

      <div className="person-content">
        <PersonsContent
          searchList={searchList}
          searchString={searchString}
          data={data}
          searchArr={searchArr}
        />
      </div>
    </div>
  );
};

export default PersonsPage;
