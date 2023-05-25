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
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios.get("https://swapi.dev/api/people").then((response) => {
      setCharacters(response.data.results);
    });
  }, []);

  useEffect(() => {
    axios.get("https://swapi.dev/api/planets").then((response) => {
      setCharacters(response.data.results);
    });
  }, []);

  useEffect(() => {
    axios.get("https://swapi.dev/api/species").then((response) => {
      setCharacters(response.data.results);
    });
  }, []);

  return (
    <div>
      <CharacterSearch />
      <CharacterData characters={characters} />
      <Pagination />
    </div>
  );
}

export default App;
