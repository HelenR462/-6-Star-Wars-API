import React from "react";
import CharacterSearch from "./component/CharacterSearch";
import CharacterData from "./component/CharacterData";
import Pagination from "./component/Pagination";
import "./App.css";

function App() {
  

  return (
    <div>
      <CharacterSearch />
      <CharacterData />
      <Pagination />
    </div>
  );
}

export default App;
