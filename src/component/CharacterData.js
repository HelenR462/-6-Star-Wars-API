import React, { useState, useEffect } from "react";
import axios from "axios";

function CharacterData({result}) {
  const [data, setData] = useState([]);
console.log(data)


  useEffect(() => {
    axios.get("https://swapi.dev/api/people").then((response) => {
      console.log(response.data);
      setData(response.data.result);
    });
  }, []);

  useEffect(() => {
    axios.get("https://swapi.dev/api/planets").then((response) => {
      console.log(response.data);
      setData(response.data.result);
    });
  }, []);

  useEffect(() => {
    axios.get("https://swapi.dev/api/species").then((response) => {
      console.log(response.data);
      setData(response.data.result);
    });
  }, []);

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
      <tbody //className="display-chart"
       
        >
<tr>
  {result}
</tr>

{/*   
        {data.results.map((result,index) => {
          return(
         dataList.push( 
       <tr key={index}>
               <td>{data.id}</td>
              <td>{data.name}</td>
              <td>{data.birth_year}</td>
              <td>{data.height}</td>
              <td>{data.mass}</td>
              <td>{data.homeworld}</td>
              <td>{data.species}</td>
            </tr> 
         )
        );
     })}  */}
      </tbody>
    </table>
  );
}

export default CharacterData;
