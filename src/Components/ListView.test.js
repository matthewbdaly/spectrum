import React from 'react';
import ReactDOM from 'react-dom';
import ListView from './ListView';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ListView />, div);
});
