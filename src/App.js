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
      species: []
    }
  ]);

  useEffect(() => {
    axios.get("https://swapi/api/people").then((response) => {
      console.log(response.data);
      setResults(response.data.results);
    });
  }, []);

  const dataList = [];
  <tbody>
    {results.map((result, index) => {
      return dataList.push(
        <tr key={index}>
          <td>{result.id}</td>
          <td>{result.name}</td>
          <td>{result.birth_year}</td>
          <td>{result.height}</td>
          <td>{result.mass}</td>
          <td>{result.homeworld}</td>
          <td>{result.species}</td>
        </tr>
      );
    })}
  </tbody>;

  return (
    <div>
      <CharacterSearch />
      <CharacterData results={results} />
      <Pagination />
    </div>
  );
}

export default App;
