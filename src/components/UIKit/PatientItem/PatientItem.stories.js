import React from 'react';

import { storiesOf } from '@storybook/react';
import PatientItem from '.';

const user = {
  picture: 'https://picsum.photos/200',
  name: 'Minh Toan',
  age: 23,
  address: '31 Tran Phu, Da Nang'
}

storiesOf('PatientItem', module)
  .add('default', () => <PatientItem user={user}></PatientItem>)