import React from 'react';
import styled from 'styled-components';
import Avatar from '../Avatar';
import { Text } from '../Typography';
import { Row } from '../FlexLayout';
import { UI_BORDER_COLOR } from '../Variables';

const StaffItemContainer = styled.div`
  background-color: #fff;
  max-width: 100%;
  padding: 15px;
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
function StaffItem(props) {
  const { user } = props;
  const { name, picture, email, phone } = user;
  return (
    <StaffItemContainer>
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
            <Text>Email: { email }</Text>
            <Text>Phone: { phone }</Text>
          </ContactWrapper>
        </div>
      </Row>
    </StaffItemContainer>
  )
}

export default StaffItem;
