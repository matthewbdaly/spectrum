import React from 'react';
import ReactDOM from 'react-dom';
import TabBar from './TabBar';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TabBar />, div);
});
