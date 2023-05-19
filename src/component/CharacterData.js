
import React, { useState} from "react";

const dataItems = [{
  
  name: "LukeSkyWalker",
  birth_year: "19BBY",
  height: "172",
  mass: "77",
  homeworld: "https://swapi.dev/api/planets/1/",
  species: [],
},

{
  name: "Owen Lars",
  birth_year: "52BBY",
  height: "178",
  mass: "120",
  homeworld: "https://swapi.dev/api/planets/1/",
  species: [],
}
];

function CharacterData({ results }) {
  const [data, setData] = useState([]);

  

  return (
    <table className="table table-border">
      <thead>
        <tr className="chart">
          <th scope="col">Name</th>
          <th scope="col">Birth Year</th>
          <th scope="col">Height</th>
          <th scope="col">Mass</th>
          <th scope="col">Homeworld</th>
          <th scope="col">Species</th>
        </tr>
      </thead>

      <tbody>
        
        {dataItems.map((dataItem, index) => ( 
          <tr key={index}>
            <td>{dataItem.name}</td>
            <td>{dataItem.birth_year}</td>
            <td>{dataItem.height}</td>
            <td>{dataItem.mass}</td>
            <td>{dataItem.homeworld}</td>
            <td>{dataItem.species}</td>
          </tr>
      ))} 
      </tbody>
    </table>
  );
}

export default CharacterData;
