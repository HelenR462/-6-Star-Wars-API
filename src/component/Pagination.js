import React, { useState } from "react";

function Pagination() {
  const [currentPage, setCurrentPage] = useState(1);
  // console.log(charList);
  // console.log(pageNums);
  // console.log(currentPage);
  const [pageCount, setPageCount] = useState([]);
  const displayedPerPage = 10;

  const lastPage = currentPage * displayedPerPage;
  const firstPage = lastPage - displayedPerPage;
  const totalPages = pageCount.slice(firstPage, lastPage);

 let pages =[];
  for (let num = 1 ; num <= Math.ceil(totalPages/displayedPerPage); num++) {
    pages.push(num)
  }
 
 

 
  return (
    <div>
      <nav aria-label="Page navigation example">
        <ul
          className="pagination"
        
        >
          <li className="page-item">
            <a className="page-link" href="#prev">
              Previous
            </a>
          </li>
         
         
          <li className="page-item">
            <a className="page-link" href="#1">
           {pageCount}
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
