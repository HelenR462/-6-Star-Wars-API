import React from "react";

const homeworld = [
  {
    name: "Tatooine",
  }
]

  const species = [
  {
    name: "Human",
  },
];

function CharacterData({ characters }) {
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
        {characters.map((dataItems, species, homeworld, index) => (
          <tr key={index}>
            <td>{dataItems.name}</td>
            <td>{dataItems.birth_year}</td>
            <td>{dataItems.height}</td>
            <td>{dataItems.mass}</td>
            <td>{homeworld.results}</td>
            <td>{species.name}</td> 
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default CharacterData;
