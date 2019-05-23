import React from 'react';
import styled from 'styled-components';
import Avatar from '../Avatar';
import { PrimaryButton } from '../Button';
import { Text } from '../Typography';
import { Row } from '../FlexLayout';
import { UI_BORDER_COLOR } from '../Variables';

const PatientProfileContainer = styled.div`
  background-color: #fff;
  padding: 15px;
  width: 100%;
  line-height: 1.6;
  border: 1px solid ${UI_BORDER_COLOR};
  border-radius: 3px;
`

const AvatarContainer = styled.div`
  margin-top: 5px;
  margin-right: 20px;
`

const NameWrapper = styled.div`
`
const ContactWrapper = styled.div`
  
`
const FindButtonWrapper = styled.div`
  margin-top: 15px;
  margin-bottom: 10px;
`

function PatientItem(props) {
  const { user, visibleFindBtn } = props;
  const { name, picture, age, address,  } = user;
  return (
    <PatientProfileContainer>
      <Row>
        <AvatarContainer>
          <Avatar src={picture} size={64} />
        </AvatarContainer>
        <div>
          <NameWrapper>
            <Text bold dark>
              { name }
            </Text>
          </NameWrapper>
          <ContactWrapper>
            <Text>Age: { age }</Text>
            <Text>{ address }</Text>
          </ContactWrapper>
          {!visibleFindBtn &&
            <FindButtonWrapper>
              <PrimaryButton text='Find Facilities'/>
            </FindButtonWrapper>
          }
        </div>
      </Row>
    </PatientProfileContainer>
  )
}

export default PatientItem;
