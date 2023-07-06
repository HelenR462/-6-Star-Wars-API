import React, { useState } from "react";

function Pagination({ count, currentPage, setCurrentPage }) {
  const [perPageCount] = useState(10);

  // const lastPage = currentPage * perPageCount;
  // const firstPage = lastPage - perPageCount;
  const totalPages = Math.ceil(count / perPageCount);

  const handleOnClick = (e) => {
    const num = Number(e.target.textContent);
    setCurrentPage(pages.length);
    console.log("num : ", num);
  };

  const previousPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  let pages = [];

  for (let num = 1; num <= totalPages; num++) {
    pages.push(
      <li key={num} className="page-item">
        <button className="page-link" onClick={handleOnClick}>
          {num}
        </button>
      </li>
    );
  }

  return (
    <div>
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          <li className="page-item">
            <button
              className="page-link"
              onClick={previousPage}
              disabled={!previousPage}
            >
              Previous
            </button>
          </li>

          {pages}

          <li className="page-item">
            <button
              className="page-link"
              herf="!#prev"
              onClick={nextPage}
              disabled={!nextPage}
            >
              Next
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Pagination;
