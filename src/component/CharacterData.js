import React, { useState} from "react";
import Pagination from "./Pagination";

function CharacterData({ characters, search}) {
  const [currentPage, setCurrentPage] = useState(0);
  const characterPerPage = 10;
  const charactersViewed = currentPage * characterPerPage;

  return (
    <>
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
          {characters
            .filter((val) => {
              if (val.name.includes(search)) {
                return val;
              } else {
                return null;
              }
            })
            .slice(charactersViewed, charactersViewed + characterPerPage)
            .map((character, index) => (
              <tr key={index}>
                <td>{character.name}</td>
                <td>{character.birth_year}</td>
                <td>{character.height}</td>
                <td>{character.mass}</td>
                <td>{character.homeworld}</td>
                <td>{character.species}</td>
              </tr>
            ))}
        </tbody>
      </table>
      <Pagination characters={characters} setCurrentPage={setCurrentPage} />
    </>
  );
}

export default CharacterData;
