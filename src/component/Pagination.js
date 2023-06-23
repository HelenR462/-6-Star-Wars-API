import React, { useState } from "react";

function Pagination({ count }) {
  const [currentPage, setCurrentPage] = useState(1);

  console.log("currentPage :", currentPage);
  const [perPageCount, setPerPageCount] = useState(10);

  const lastPage = currentPage * perPageCount;
  const firstPage = lastPage - perPageCount;
  const totalPages = Math.ceil(count/ perPageCount);

  let pages = [...Array(totalPages + 1).keys()].slice(1);
  // console.log("pages: ", pages);
  // console.log("totalPages: ", totalPages);
  for (let num = 1; num <= totalPages; num++) {
    pages.push(
      <li key={num} className="page-item">
        <a className="page-link" href="#1">
          {num}
        </a>
      </li>
    );
  }
  console.log(pages);

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
