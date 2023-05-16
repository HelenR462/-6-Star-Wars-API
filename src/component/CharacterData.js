import React, { useState, useEffect } from "react";
import axios from "axios";

function CharacterData({ results, dataList }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("https://swapi.dev/api/people").then((response) => {
      console.log(response);
      setData(response.data.result);
    });
  }, []);

  useEffect(() => {
    axios.get("https://swapi.dev/api/planets").then((response) => {
      console.log(response);
      setData(response.data.result);
    });
  }, []);

  useEffect(() => {
    axios.get("https://swapi.dev/api/species").then((response) => {
      console.log(response);
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
      <tbody className="display-chart">
        <tr>{dataList}</tr>

        {/* {data.results.map((result) => {
         dataList.push( */}
        {/* <tr key={data.index}>
              <td>{results.name}</td>
              <td>{dataList.birth_year}</td>
              <td>{data.height}</td>
              <td>{data.mass}</td>
              <td>{data.homeworld}</td>
              <td>{data.species}</td>
            </tr> */}
        {/* );
        })} */}
      </tbody>
    </table>
  );
}

export default CharacterData;
