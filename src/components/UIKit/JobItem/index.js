import React from 'react';
import styled from 'styled-components';
import Avatar from '../Avatar';
import { Text } from '../Typography';
import { Row } from '../FlexLayout';
import { UI_BORDER_COLOR } from '../Variables';
import { ChipButton } from '../Button';

const JobItemWrapper = styled.div`
  background-color: #fff;
  width: 100%;
  padding: 15px;
  line-height: 1.6;
  border: 1px solid ${UI_BORDER_COLOR};
  border-radius: 3px;
`
const AvatarWrapper = styled.div`
  margin-top: 5px;
  margin-right: 20px;
`

const NameWrapper = styled.div`
`

const ContactWrapper = styled.div`
`

const AppointmentWrapper = styled.div`
  margin-top: 5px;
`

function JobItem(props) {
  const { job } = props;
  const { name, picture, distance, address, appointments } = job;
  return (
    <JobItemWrapper>
      <Row>
        <AvatarWrapper>
          <Avatar src={picture} size={64} />
        </AvatarWrapper>
        <div>
          <NameWrapper>
            <Text bold dark>
              { name }
            </Text>
          </NameWrapper>
          <ContactWrapper>
            <Text>Distance: { distance }</Text>
            <Text>{ address }</Text>
          </ContactWrapper>
          <AppointmentWrapper>
            {appointments.map((appointment =>
              (<ChipButton
                date={appointment.date}
                isSelected={appointment.isSelected}
              />)
            ))}
          </AppointmentWrapper>
        </div>
      </Row>
    </JobItemWrapper>
  )
}

export default JobItem;
