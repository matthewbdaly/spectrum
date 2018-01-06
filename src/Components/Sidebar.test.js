import React from 'react';
import ReactDOM from 'react-dom';
import Sidebar from './Sidebar';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Sidebar />, div);
});

it('should match the snapshot', () => {
  const div = document.createElement('div');
  const el = ReactDOM.render(<Sidebar />, div);
  expect(el).toMatchSnapshot();
});
