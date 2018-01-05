import React from 'react';
import ReactDOM from 'react-dom';
import TabBar from './TabBar';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TabBar />, div);
});

it('should match the snapshot', () => {
  const div = document.createElement('div');
  const el = ReactDOM.render(<TabBar />, div);
  expect(el).toMatchSnapshot();
});
