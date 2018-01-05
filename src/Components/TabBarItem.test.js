import React from 'react';
import ReactDOM from 'react-dom';
import TabBarItem from './TabBarItem';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TabBarItem />, div);
});
