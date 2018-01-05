import React from 'react';
import ReactDOM from 'react-dom';
import ListViewItem from './ListViewItem';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ListViewItem />, div);
});
