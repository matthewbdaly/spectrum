import React, { Component } from 'react';
import Bar from '../Components/Bar';

class BarPage extends Component {
  render() {
    return (
      <div>
        <Bar>This is a default bar</Bar>
        <Bar theme="main">This is a main bar</Bar>
        <Bar theme="cool">This is a cool bar</Bar>
        <Bar theme="hot">This is a hot bar</Bar>
        <Bar theme="main" inverse="true">This is an inverse main bar</Bar>
        <Bar theme="cool" inverse="true">This is an inverse cool bar</Bar>
        <Bar theme="hot" inverse="true">This is an inverse hot bar</Bar>
      </div>
    );
  }
}

export default BarPage;
