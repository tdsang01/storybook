import React from 'react';
import styled from 'styled-components';
import StaffItem from '../StaffItem';
import { Col } from '../FlexLayout';
import Pagination from '../Pagination';

const StaffItemListWrapper = styled.div`
  max-width: 480px;
  margin: 0 auto;
  
  h1 {
    margin: 0;
    font-weight: bold;
  }
`

const StaffItemWrapper = styled.div`
  margin: 5px 0;
`

// const HeaderWrapper = styled.div`
//   margin: 20px 0;
// `

function StaffListItem(props) {
  const { users } = props;

  return (
    <StaffItemListWrapper>
      {/* <HeaderWrapper> */}
      {/* <Row spaceBetween alignItemsCenter> */}
      {/* <h1>Patients</h1> */}
      {/* <button>New</button> */}
      {/* </Row> */}
      {/* </HeaderWrapper> */}
      <Col>
        {users.map(user => (
          <StaffItemWrapper>
            <StaffItem user={user}/>
          </StaffItemWrapper>
        ))}
        <Pagination/>
      </Col>
    </StaffItemListWrapper>
  )
}

export default StaffListItem;
