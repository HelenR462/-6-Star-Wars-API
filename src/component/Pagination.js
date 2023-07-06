import React, { useState } from "react";

function Pagination({ count, currentPage, setCurrentPage }) {
  const [perPageCount] = useState(10);

  const lastPage = currentPage * perPageCount;
  const firstPage = lastPage - perPageCount;
  const totalPages = Math.ceil(count / perPageCount);

  const handleOnClick = (e) => {
    const num = Number(e.target.textContent);
    setCurrentPage(pages)
    console.log("num : ", num);
  };

  let pages = [];
  // console.log("pages: ", pages);
  // console.log("totalPages: ", totalPages);
  for (let num = 1; num <= totalPages; num++) {
    pages.push(
      <li key={num} className="page-item">
        <button className="page-link" onClick={handleOnClick}>
          {num}
        </button>
      </li>
    );
  }
  // console.log(pages);

  return (
    <div>
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          <li className="page-item">
            <a className="page-link" href="#prev">
              Previous
            </a>
          </li>

          {pages}

          <li className="page-item">
            <a className="page-link" href="#next">
              Next
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Pagination;
