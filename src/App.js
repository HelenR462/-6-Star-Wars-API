import React, { useState, useEffect } from "react";
import CharacterSearch from "./component/CharacterSearch";
import CharacterData from "./component/CharacterData";
import axios from "axios";
import "./App.css";

function App() {
  const [characters, setCharacters] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchCharacterData();
  }, []);

  async function fetchCharacterData() {
    const characterPages = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const speciesPages = [1, 2, 3, 4];
    const planetPages = [1, 2, 3, 4, 5, 6];

    const characters = await Promise.all(
      characterPages.map(async (page) => {
        const response = await axios.get(
          `https://swapi.py4e.com/api/people/?page=${page}`
        );
        return response.data.results;
      })
    );

    let species = await Promise.all(
      speciesPages.map(async (page) => {
        const response = await axios.get(
          `https://swapi.py4e.com/api/species/?page=${page}`
        );
        return response.data.results;
      })
    );

    let planets = await Promise.all(
      planetPages.map(async (page) => {
        const response = await axios.get(
          `https://swapi.py4e.com/api/planets/?page=${page}`
        );
        return response.data.results;
      })
    );

    species = arrayToObj(species);
    planets = arrayToObj(planets);

    for (const char of characters) {
      char.homeworld = planets[char.homeworld];
      char.species = char.species.length === 0 ? "Human" : species[char.species[0]];
    }

    setCharacters(characters);
  }

  function arrayToObj(array) {
    let obj = {};
    for (let item of array) {
      obj[item["url"]] = item["name"];
    }
    return obj;
  }

  return (
    <div>
      <CharacterSearch 
      search={search} 
      setSearch={setSearch} />
      <CharacterData 
      characters={characters}
       search={search} />
    </div>
  );
}

export default App;
