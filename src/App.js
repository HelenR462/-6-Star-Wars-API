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
  const [homeworldName, setHomeworldName] = useState([]);
  const [speciesName, setSpeciesName] = useState([]);
  const [loading, setloading] = useState(false);

  useEffect(() => {
    const getData = async () => {
   
      const response = await axios.get("https://swapi.dev/api/people");
      setloading(true)

      for (let index = 0; index < response.data.results.length; index++) {
        const character = response.data.results[index];

        const homeworld = response.data.results[index].homeworld;
        const planet = await axios.get(homeworld);
        character.homeworld = planet.data.name;

        // debugger;
        const speciesURL = response.data.results[index].species;
        //this is the url

        if (speciesURL.length === 0) {
          character.species = "Human";
        } else {
          const species = await axios.get(speciesURL);
       
          character.species = species.data.name;
        }
      }
      setloading(false)
      setCharacters(response.data.results);
    };

    getData();
  }, []);
  console.log(homeworldName)

  /*  useEffect(() => {
    // 1
    axios.get("https://swapi.dev/api/people").then((response) => {
      // 3
      // loop through each character
      for (let index = 0; index < response.data.results.length; index++) {
        const character = response.data.results[index];

      console.log(character)

        //get the homeworld name
        // 4
        axios.get(character.homeworld).then((response) => {
          // 6
          console.log(response.data.name);
          characters.homeworldName = response.data.name;
        }, []);

        // axios.get(character.species).then((response) => {
        //   console.log(response.data.name);
        //   character.speciesName = response.data.name;
        // }, []);
      }
      // 5
      setCharacters(response.data.results);
    });
    // 2
    console.log('andy');
  }, []); */

  useEffect(() => {
    console.log("characters", characters);
    console.log("homeworldName", homeworldName); 
    console.log("species",speciesName);
  }, [characters, homeworldName, speciesName]);

  return (
    <div>
      <CharacterSearch />
      <CharacterData
        characters={characters}
        homeworldName={homeworldName}
        speciesName={speciesName}
       
      />
      <Pagination  />
    </div>
  );
}

export default App;
