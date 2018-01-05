import React from 'react';
import ReactDOM from 'react-dom';
import Bar from './Bar';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Bar />, div);
});

it('should match the snapshot', () => {
  const div = document.createElement('div');
  const el = ReactDOM.render(<Bar />, div);
  expect(el).toMatchSnapshot();
});
