import React from 'react';
import styled from 'styled-components';
import PatientItem from '../PatientItem';
import JobItem from '../JobItem';
import { Col } from '../FlexLayout'

const RequestItemWrapper = styled.div`
  
`
function RequestItem(props) {
  const { data } = props;
  const { user, job } = data;

  return (
    <RequestItemWrapper>
      <Col>
        <JobItem job={job}/>
        <PatientItem visibleFindBtn user={user}/>
      </Col>
    </RequestItemWrapper>
  )
}

export default RequestItem;
