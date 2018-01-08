import React, { Component } from 'react';
import Bar from '../Components/Bar';

class BarPage extends Component {
  render() {
    return (
      <div>
        <Bar>This is a default bar</Bar>
        <Bar theme="main">This is a main bar</Bar>
        <Bar theme="positive">This is a positive bar</Bar>
        <Bar theme="negative">This is a negative bar</Bar>
        <Bar theme="main" inverse="true">This is an inverse main bar</Bar>
        <Bar theme="positive" inverse="true">This is an inverse positive bar</Bar>
        <Bar theme="negative" inverse="true">This is an inverse negative bar</Bar>
      </div>
    );
  }
}

export default BarPage;
