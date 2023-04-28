import React from "react";
import axios from "axios"

function CharacterSearch() {
  // const [input, setInput]=useState()
 
 const handeleClick =(e)=>{
 axios.get("https://swapi.dev/api/planets/").then((response)=>{
  console.log(response.data)
})

 }
 
 
  return (
      <div>
      <header className="header">
        <h1>Star Wars API </h1>
      </header>
      <div className="input-group mb-3" >
        <input
          type="text"
          className="form-control"
          placeholder="Welcome to Star Wars World! What are you searching for?"
          // aria-label="Recipient's username"
          aria-describedby="button-addon2"
        ></input>
        <button
          className="btn btn-outline-secondary"
          onClick={handeleClick}
          type="button"
          id="button-addon2"
        >
          Request
        </button>
      </div>
    </div>
  );
}

export default CharacterSearch;
