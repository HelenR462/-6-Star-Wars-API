import React, { useState, useEffect } from "react";
import CharacterSearch from "./component/CharacterSearch";
import CharacterData from "./component/CharacterData";
import Pagination from "./component/Pagination";
import axios from "axios";
import "./App.css";

// Base request component
// method=""  get, delete, head, post, put and patch - required */
// url="" url endpoint to be requested - required */

function App() {
  const [results, setResults] = useState([
    {
      id: Math.random(),
      name: "",
      height: "",
      mass: "",
      homeworld: "",
      species: "",
    },
  ]);
  console.log(results);

  useEffect(() => {
    axios
      .get("https://swapi/api/people")
      .then((response) => setResults(response.results.result));
  }, []);

  const dataList = [];
  results.map((result) => {
    return(
    dataList.push(
      <tbody>
        <tr key={results.id}>
          <td>{results.name}</td>
          <td>{results.birth_year}</td>
          <td>{results.height}</td>
          <td>{results.mass}</td>
          <td>{results.homeworld}</td>
          <td>{results.species}</td>
        </tr>
      </tbody>
    )
    );
  });

  return (
    <div>
      <CharacterSearch />
      <CharacterData results={results} />
      <Pagination />
    </div>
  );
}

export default App;
