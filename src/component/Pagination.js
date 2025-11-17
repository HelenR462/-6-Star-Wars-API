import React from "react";
import ReactPaginate from "react-paginate";

function Pagination({ characters, setCurrentPage }) {
  const count = Math.ceil(characters.length / 10);

  function changePage({ selected }) {
    setCurrentPage(selected);
  }

  return (
    <ReactPaginate
      previousLabel={"Prev"}
      nextLabel={"Next"}
      pageCount={count}
      onPageChange={changePage}
      containerClassName={"button-container"}
     
    />
  );
}

export default Pagination;
