import React from 'react';
import styled from 'styled-components';
import PatientItem from '../PatientItem';
import { Col } from '../FlexLayout';
import Pagination from '../Pagination';

const PatientListItemWrapper = styled.div`
  max-width: 480px;
  margin: 0 auto;
  
  h1 {
    margin: 0;
    font-weight: bold;
  }
`

const PatientProfileWrapper = styled.div`
  margin: 5px 0;
`

// const HeaderWrapper = styled.div`
//   margin: 20px 0;
// `

function PatientListItem(props) {
  const { users } = props;

  return (
    <PatientListItemWrapper>
      {/* <HeaderWrapper> */}
        {/* <Row spaceBetween alignItemsCenter> */}
          {/* <h1>Patients</h1> */}
          {/* <button>New</button> */}
        {/* </Row> */}
      {/* </HeaderWrapper> */}
      <Col>
        {users.map(user => (
          <PatientProfileWrapper>
            <PatientItem user={user}/>
          </PatientProfileWrapper>
        ))}
        <Pagination/>
      </Col>
    </PatientListItemWrapper>
  )
}

export default PatientListItem;
