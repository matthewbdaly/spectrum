import React from 'react';
import { storiesOf } from '@storybook/react';
import Alert from '../src/Components/Alert';
import Bar from '../src/Components/Bar';
import Button from '../src/Components/Button';
import Card from '../src/Components/Card';
import ListView from '../src/Components/ListView';
import ListViewItem from '../src/Components/ListViewItem';

storiesOf('Alert', module)
  .add('Default theme', () => <Alert>Default alert</Alert>)
  .add('Main theme', () => <Alert theme="main">Default alert</Alert>)
  .add('Cool theme', () => <Alert theme="cool">Cool alert</Alert>)
  .add('Warm theme', () => <Alert theme="warm">Warm alert</Alert>)
  .add('Hot theme', () => <Alert theme="hot">Hot alert</Alert>);

storiesOf('Bar', module)
  .add('Default theme', () => <Bar>Default Bar</Bar>)
  .add('Main theme', () => <Bar theme="main">Bar with the main theme</Bar>)
  .add('Cool theme', () => <Bar theme="cool">Bar with the cool theme</Bar>)
  .add('Warm theme', () => <Bar theme="warm">Bar with the warm theme</Bar>)
  .add('Hot theme', () => <Bar theme="hot">Bar with the hot theme</Bar>)
  .add('Inverse main theme', () => <Bar theme="main" inverse="true">Bar with the inverse main theme</Bar>)
  .add('Inverse cool theme', () => <Bar theme="cool" inverse="true">Bar with the inverse main theme</Bar>)
  .add('Inverse warm theme', () => <Bar theme="warm" inverse="true">Bar with the inverse main theme</Bar>)
  .add('Inverse hot theme', () => <Bar theme="hot" inverse="true">Bar with the inverse main theme</Bar>);

storiesOf('Button', module)
  .add('Default theme', () => <Button>Default Button</Button>)
  .add('Main theme', () => <Button theme="main">Button with the main theme</Button>)
  .add('Cool theme', () => <Button theme="cool">Button with the cool theme</Button>)
  .add('Warm theme', () => <Button theme="warm">Button with the warm theme</Button>)
  .add('Hot theme', () => <Button theme="hot">Button with the hot theme</Button>)
  .add('Inverse main theme', () => <Button theme="main" inverse="true">Button with the inverse main theme</Button>)
  .add('Inverse cool theme', () => <Button theme="cool" inverse="true">Button with the inverse main theme</Button>)
  .add('Inverse warm theme', () => <Button theme="warm" inverse="true">Button with the inverse main theme</Button>)
  .add('Inverse hot theme', () => <Button theme="hot" inverse="true">Button with the inverse main theme</Button>);

storiesOf('Card', module)
  .add('Default card', () => <Card header="Default card">This is an example of a default Card component</Card>)
  .add('Card with listview', () => <Card header="Card with list view inside">
          <ListView>
            <ListViewItem>Item 1</ListViewItem>
            <ListViewItem>Item 2</ListViewItem>
            <ListViewItem>Item 3</ListViewItem>
          </ListView>
        </Card>)
