import React from "react";

function CharacterSearch() {
  const handleOnClick = (e) => {
    e.preventDefault();
  };

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
        ></input>
        <button
          className="btn btn-outline-secondary"
          type="button"
          id="button-addon2"
          onClick={handleOnClick}
        >
          Request
        </button>
      </div>
    </div>
  );
}

export default CharacterSearch;
