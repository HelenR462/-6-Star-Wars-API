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
    axios.get("https://swapi.dev/api/people")
    .then((response) => {
      // loop through each character
      for (let index = 0; index < response.data.results.length; index++) {
        const character = response.data.results[index];
        // console.log(character)
     

        //get the homeworld name
          const homeworldName = axios.get("https://swapi.dev/api/planets")
          .then((response)=> {
            setCharacters(response.data.result.name)
          }, [])
          console.log(homeworldName)

           // assign the character's homeworldName property
             character.homeworldName =  homeworldName.data.results;
       
     
             // get the species name
       const species = response.data.name
       // assign the character's speciesName property
       character.speciesName = "species"
      //  "TBD2";
       
      }
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
