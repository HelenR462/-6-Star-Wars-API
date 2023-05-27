/* eslint-disable no-loop-func */
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
      // loop through each character
      for (let index = 0; index < response.data.results.length; index++) {
        const character = response.data.results[index];

        // console.log(character)

        //get the homeworld name
        axios.get(character.homeworld).then((response) => {
          console.log(response.data.name);
          characters.homeworld = response.data.name;
        }, []);

        axios.get(character.species).then((response) => {
          console.log(response.data.name);
          character.speciesName = response.data.name;
        }, []);
      }
      setCharacters(response.data.results);
    });
  }, []);

  useEffect(() => {
    console.log(["characters", characters]);
  }, [characters]);

  return (
    <div>
      <CharacterSearch />
      <CharacterData characters={characters} />
      <Pagination />
    </div>
  );
}

export default App;
