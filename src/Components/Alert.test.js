import React from 'react';
import ReactDOM from 'react-dom';
import Alert from './Alert';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Alert />, div);
});

it('should match the snapshot', () => {
  const div = document.createElement('div');
  const el = ReactDOM.render(<Alert />, div);
  expect(el).toMatchSnapshot();
});
