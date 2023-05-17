import React, { useState } from "react";


function Pagination() {
  const [pages, setPages] = useState([]);
  const [currentPage, setCurrentPage]= useState(0)


  const handleOnClick = (e) => {
    setPages(e.target.value);
    setCurrentPage(currentPage-1)
  };

  const pageCount = pages? Math.ceil(pages.length) :0;
  if(  pageCount < 1 ){
    return null; 
  }

const pageNumbers = Range(1, pageCount + 1)
  
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
              {
                 pageNumbers.map((pageNumber)=>(
                  <li className="page-link">{pages}</li>
                 ))
              }

          {/* < className="page-item">
            <a className="page-link" href="#1">
              1
            </a>
           </li> */}

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
