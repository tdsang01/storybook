import { configure, addDecorator } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import 'semantic-ui-css/semantic.min.css';
import '../index.css';
import '../components/UIKit/setupFontAwesome';

addDecorator(withInfo)

const req = require.context('../components', true, /\.stories\.js$/)

function loadStories() {
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
