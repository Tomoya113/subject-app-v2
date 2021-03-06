import React from 'react';
import { storiesOf } from '@storybook/react';
import { muiTheme } from 'storybook-addon-material-ui';
import { withKnobs } from '@storybook/addon-knobs';
import theme from '../../../utils/theme';
import Select from './Select';

const stories = storiesOf('Select', module);
stories.addDecorator(muiTheme([theme]));
stories.addParameters({ info: { inline: true } });
stories.addDecorator(withKnobs);

const menuItem = ['dummy1', 'dummy2', 'dummy3', 'dummy4'];

stories.add('Select', () => (
  <Select
    inputLabel="テスト"
    menuItem={menuItem}
    currentItem={menuItem[0]}
    category="name"
    onChange={() => {}}
  />
));
