import React from 'react';
import { storiesOf } from '@storybook/react';
import RequestItem from '.';

const data = {
  user: {
    picture: 'https://picsum.photos/200',
    name: 'Minh Toan',
    age: 23,
    address: '31 Tran Phu, Da Nang'
  },
  job: {
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
}

storiesOf('RequestItem', module)
  .add('default', () =>(
    <RequestItem data={data}/>
  ))
