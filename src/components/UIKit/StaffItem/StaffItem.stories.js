import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import StaffItem from '.';

const user = {
  picture: 'https://picsum.photos/200',
  name: 'Minh Toan',
  email: 'toanhm@coders.tokyo',
  phone: '0813987652'
}

storiesOf('StaffItem', module)
  .add('default', () => (
    <Fragment>
      <StaffItem user={user}/>
    </Fragment>
  ))