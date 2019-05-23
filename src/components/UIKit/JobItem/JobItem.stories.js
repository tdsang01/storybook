import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import JobItem from '.';

const job = {
  picture: 'https://picsum.photos/200',
  name: 'Minh Toan',
  distance: '1km',
  address: '31 Tran Phu, Da Nang',
  appointments: [
    {
      date: new Date().toLocaleDateString(),
      isSelected: true,
    },
    {
      date: new Date().toLocaleDateString(),
      isSelected: false,
    },
  ]
}

storiesOf('JobItem', module)
  .add('default', () => (
    <Fragment>
      <JobItem job={job}/>
    </Fragment>
  ))