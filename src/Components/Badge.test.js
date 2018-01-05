import React from 'react';
import ReactDOM from 'react-dom';
import Badge from './Badge';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Badge />, div);
});

it('should match the snapshot', () => {
  const div = document.createElement('div');
  const el = ReactDOM.render(<Badge />, div);
  expect(el).toMatchSnapshot();
});
