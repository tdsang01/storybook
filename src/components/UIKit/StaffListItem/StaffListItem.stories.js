import React from 'react';
import { storiesOf } from '@storybook/react';
import StaffListItem from '.';

const listStaff = [
  {
    picture: 'https://picsum.photos/200',
    name: 'Minh Toan',
    email: 'toanhm@coders.tokyo',
    phone: '0813987652'
  },
  {
    picture: 'https://picsum.photos/200',
    name: 'Minh Toan',
    email: 'toanhm@coders.tokyo',
    phone: '0813987652'
  },
  {
    picture: 'https://picsum.photos/200',
    name: 'Minh Toan',
    email: 'toanhm@coders.tokyo',
    phone: '0813987652'
  }
]

storiesOf('StaffListItem', module)
  .add('default', () => <StaffListItem users={listStaff}></StaffListItem>)