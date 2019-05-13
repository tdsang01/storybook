import React from 'react'

import { storiesOf, configure, addDecorator } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { linkTo } from '@storybook/addon-links'
import { Welcome } from '@storybook/react/demo'

addDecorator(withInfo)

storiesOf('Welcome', module).add('to Storybook', () => (
  <Welcome showApp={linkTo('Button')} />
))

const req = require.context('../components', true, /\.stories\.js$/)

function loadStories() {
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
