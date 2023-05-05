import React, { useState, useEffect } from "react";
import axios from "axios";

function CharacterData() {
  const [data, setData] = useState([]);
console.log(data)
  useEffect(() => {
    axios.get("https://swapi.dev/api/people/2").then((response) => {
       
           setData(response.data);
      });
  }, []);

  return (
    <table className="table table-border">
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Birth Year</th>
          <th scope="col">Height</th>
          <th scope="col">Mass</th>
          <th scope="col">Homeworld</th>
          <th scope="col">Species</th>
        </tr>
      </thead>
      <tbody>
        <tr  className="row">
          <td>{data.name}</td>
          <td>{data.birth_year}</td>
          <td>{data.height}</td>
          <td>{data.mass}</td>
          <td>{data.Homeworld}</td>
          <td>{data.species}</td>
        </tr>
      </tbody>
    </table>
  );
}

export default CharacterData;
