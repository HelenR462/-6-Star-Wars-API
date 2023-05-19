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
  const [results, setResults] = useState([])
//  console.log("results", results)

    

  useEffect(() => {
    axios.get("https://swapi.dev/api/people").then((response) => {
      // console.log(response.data);
      setResults(response.data.result);
    });
  }, []);

  useEffect(() => {
    axios.get("https://swapi.dev/api/planets").then((response) => {
      // console.log(response.data);
      setResults(response.data.result);
    });
  }, []);

  useEffect(() => {
    axios.get("https://swapi.dev/api/species").then((response) => {
      // console.log(response.data);
      setResults(response.data.result);
    });
  }, []);

  return (
    <div>
      <CharacterSearch />
      <CharacterData results={results} />
      <Pagination />
    </div>
  );
}

export default App;
