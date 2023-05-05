import React from "react";
import CharacterSearch from "./component/CharacterSearch";
import CharacterData from "./component/CharacterData";
import Pagination from "./component/Pagination";
import "./App.css";

// Base request component
// method=""  get, delete, head, post, put and patch - required */
// url="" url endpoint to be requested - required */

function App() {
 

  return (
    <div>
      <CharacterSearch />
      <CharacterData  />
      <Pagination />
    </div>
  );
}

export default App;
