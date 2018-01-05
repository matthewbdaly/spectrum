import React from 'react';
import ReactDOM from 'react-dom';
import TextInput from './TextInput';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TextInput />, div);
});

it('should match the snapshot', () => {
  const div = document.createElement('div');
  const el = ReactDOM.render(<TextInput />, div);
  expect(el).toMatchSnapshot();
});
