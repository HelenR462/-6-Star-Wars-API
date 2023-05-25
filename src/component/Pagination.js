import React, { useState } from "react";

function Pagination({ Characters }) {
  const [charList, setCharList] = useState([]);
  const [pageNums, setPageNums] = useState(1);
  const [currentPage, setCurrentPage] = useState();
  console.log(charList);
  console.log(pageNums);
  console.log(currentPage);

  const handleOnClick = () => {
    // const pageCount = Math.ceil(pages/listPerPage) :0;
    // if(  pageCount < 1 ){
    //   return null;
    // }
    setCurrentPage(charList.length === 10);
    setPageNums(charList.length > 10);
    setCharList(charList / 10);
  };

  return (
    <div>
      <nav aria-label="Page navigation example">
        <ul className="pagination" onClick={handleOnClick} value>
          <li className="page-item">
            <a className="page-link" href="#prev">
              Previous
            </a>
          </li>

          {/* {
               pageNums.map((pageNum, index)=> {
                  return(
                    <CharacterData key={index}pageNum={pageNum}/>
                  )
              })} */}

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
