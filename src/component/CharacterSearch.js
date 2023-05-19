import React from "react";
 

function CharacterSearch({setResults,dataList}) {
 
 
  const handleOnClick = (e) => {
    e.preventDefault();
    setResults()
  };

  return (
    <div>
      <header className="header">
        <h1>Star Wars API </h1>
      </header>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Welcome to Star Wars World!"
          // aria-label="Recipient's username"
          aria-describedby="button-addon2"
         
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
