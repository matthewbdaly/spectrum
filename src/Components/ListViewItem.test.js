import React from 'react';
import ReactDOM from 'react-dom';
import ListViewItem from './ListViewItem';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ListViewItem />, div);
});

it('should match the snapshot', () => {
  const div = document.createElement('div');
  const el = ReactDOM.render(<ListViewItem />, div);
  expect(el).toMatchSnapshot();
});
