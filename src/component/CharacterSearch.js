import React from "react";

function CharacterSearch({ search, setSearch }) {
  return (
    <div>
      <header className="header">
        <h1>Star Wars API </h1>
      </header>
      <div className="input-group input-group-lg">
        <input
          type="text"
          className="form-control"
          placeholder="Welcome to Star Wars World!"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        ></input>
      </div>
    </div>
  );
}

export default CharacterSearch;
