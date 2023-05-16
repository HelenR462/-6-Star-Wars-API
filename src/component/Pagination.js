import React, { useState } from "react";

function Pagination() {
  const [pageNumber, setPageNumber] = useState([]);
  // console.log(pageNumber);
  const handlePageChange = (e) => {
    setPageNumber(
      // if(pageNumber )
    );
  };

  return (
    <div>
      <nav aria-label="Page navigation example">
        <ul className="pagination" onChange={handlePageChange}>
          <li className="page-item">
            <a className="page-link" href="#prev">
              Previous
            </a>
          </li>

          <li className="page-item">
            <a className="page-link" href="#1">
              1
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#2">
              2
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#3">
              3
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#1">
              4
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#2">
              5
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#3">
              6
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#3">
              7
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#1">
              8
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#2">
              9
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#3">
              10
            </a>
          </li>

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
