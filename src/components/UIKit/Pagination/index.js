import React from 'react';
import ReactPaginate from 'react-paginate';
import styled from 'styled-components';

const PaginationWrapper = styled.div`
  ul { 
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex: 1;
    justify-content: center;
  }
  
  li {
    display: flex;
    margin: 0 5px;
    cursor: pointer;
    font-weight: bold;
    a {
      padding: 5px;
      color: #a6a6a6;
      outline: none;
    }
    
    &.active-page {
      a {
        color: #3c90ff;
      }
    }
  }
`

function pageChange(page) {
  console.log(page);
}

function PaginationComponent(props) {
  return (
    <PaginationWrapper>
      <ReactPaginate
        previousLabel={'<'}
        nextLabel={'>'}
        breakLabel='...'
        pageCount={20}
        marginPagesDisplayed={3}
        pageRangeDisplayed={3}
        onPageChange={(page) => pageChange(page)}
        activeClassName='active-page'
      />
    </PaginationWrapper>
  )
}

export default  PaginationComponent;
