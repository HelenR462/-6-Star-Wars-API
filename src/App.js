import React, { useState, useEffect } from "react";
import CharacterSearch from "./component/CharacterSearch";
import CharacterData from "./component/CharacterData";
import Pagination from "./component/Pagination";
import axios from "axios";
import "./App.css";


function App() {
  const [characters, setCharacters] = useState([]);
  const [homeworldName] = useState([]);
  const [speciesName] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(
        "https://swapi.dev/api/people/?page=" + currentPage
      );
   
      setCount(response.data.count);

      for (let index = 0; index < response.data.results.length; index++) {
        const character = response.data.results[index];

        const homeworld = response.data.results[index].homeworld;
        const planet = await axios.get(homeworld);
        character.homeworld = planet.data.name;

        const speciesURL = response.data.results[index].species;

        if (speciesURL.length === 0) {
          character.species = "Human";
        } else {
          const species = await axios.get(speciesURL);

          character.species = species.data.name;
        }
      }

      setCharacters(response.data.results);
    };

    getData();
  }, [currentPage, setCurrentPage]);

  return (
    <div>
      <CharacterSearch />
      <CharacterData
        characters={characters}
        homeworldName={homeworldName}
        speciesName={speciesName}
      />
      <Pagination
        count={count}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}

export default App;
