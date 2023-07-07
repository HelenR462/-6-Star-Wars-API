import React, { useState } from "react";

function Pagination({ count, currentPage, setCurrentPage }) {
  const [perPageCount] = useState(10);

  const lastPage = currentPage * perPageCount;
  const firstPage = lastPage - perPageCount;
  const totalPages = Math.ceil(count / perPageCount);

  const handleOnClick = (e) => {
    const num = Number(e.target.textContent);
    setCurrentPage(num);

  };

  const prevOnClick = () => {
    setCurrentPage(currentPage - 1);
    if (firstPage === 1 ? currentPage : "");
  };

  const nextOnClick = () => {
    setCurrentPage(currentPage + 1);
    if (currentPage === totalPages ? lastPage : "");
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
              onClick={prevOnClick}

            >
              Previous
            </button>
          </li>

          {pages}

          <li className="page-item">
            <button
              className="page-link"
              herf="!#prev"
              onClick={nextOnClick}

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
