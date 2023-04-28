import React from "react";

function CharacterData() {

  
  return (
    <table>
      <thead>
        <tr className="data-header">
          <th col="4">Name</th>
          <th col="4">Birth date</th>
          <th col="4">Height</th>
          <th col="4">Mass</th>
          <th col="4">Homeworld</th>
          <th col="4">Species</th>
        </tr>
      </thead>
      {/* <tbody>
        <tr className="data-item">
          <td>name</td>
          <td>bday</td>
          <td>height</td>
          <td>mass</td>
          <td>homeW</td>
          <td>species</td>
        </tr>
       
      </tbody> */}
    </table>
  );
}

export default CharacterData;
