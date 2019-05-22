import React from 'react';
import { storiesOf } from '@storybook/react';
import PatientListItem from '.';

const listUser = [
  {
    picture: 'https://picsum.photos/200',
    name: 'Minh Toan',
    age: 23,
    address: '31 Tran Phu, Da Nang'
  },
  {
    picture: 'https://picsum.photos/200',
    name: 'Minh Toan',
    age: 23,
    address: '31 Tran Phu, Da Nang'
  },
  {
    picture: 'https://picsum.photos/200',
    name: 'Minh Toan',
    age: 23,
    address: '31 Tran Phu, Da Nang'
  },
]

storiesOf('PatientListItem', module)
  .add('default', () => <PatientListItem users={listUser}></PatientListItem>)