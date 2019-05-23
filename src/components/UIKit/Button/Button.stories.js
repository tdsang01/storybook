import React from 'react';
import { storiesOf } from '@storybook/react';
import { ChipButton, PrimaryButton } from '.'

storiesOf('Button', module)
  .add('primary-button', () => (<PrimaryButton text='Primary Button'/>))
  .add('chip-button', () => (<ChipButton date={(new Date()).toLocaleDateString()}/>))
