import React, { useState } from "react";


function Pagination() {
  const [pages, setPages] = useState([]);
  const [currentPage, setCurrentPage]= useState([])

  // "count": 82,
  // "next": "https://swapi.dev/api/people/?page=2",
  // "previous": null,


  const handleOnClick = () => {
    const pageCount = pages? Math.ceil(pages.length) :0;
    if(  pageCount < 1 ){
      return null; 
    }
  setCurrentPage(currentPage +1)
  setPages(pageCount)
  };

  
// const pageNumbers = Range(1, pageCount + 1)
  
  return (
    <div>
      <nav aria-label="Page navigation example">
        <ul className="pagination" onClick={handleOnClick}
        value
        >
          <li className="page-item">
            <a className="page-link" href="#prev">
              Previous
            </a>
          </li>
              {/* {
                 pageNumbers.map((pageNumber)=>(
                  <li className="page-link">{pageNumbers}</li>
                 ))
              } */}

          <li className="page-item">
            <a className="page-link" href="#1">
              1
            </a>
           </li>
           <li className="page-item">
            <a className="page-link" href="#1">
              2
            </a>
           </li>
           <li className="page-item">
            <a className="page-link" href="#1">
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
