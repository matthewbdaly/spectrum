import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from '../src/Components/Button';

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
