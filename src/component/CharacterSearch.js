import React from "react";
// import axios from "axios";

function CharacterSearch({dataList}) {
  // const [search, setSearch] = useState(null);
  // console.log(search);

  // useEffect((e) => {
  //   axios.get("https://swapi/api/people").then((response) => {
  //     setSearch(response.search);
  //   });
  // }, []);

  const handleOnClick = (e) => {
    e.preventDefault();
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
          value={dataList}
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
