import React from 'react';
import ReactDOM from 'react-dom';
import Badge from './Badge';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Badge />, div);
});
