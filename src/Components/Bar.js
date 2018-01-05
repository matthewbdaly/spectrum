// @flow
import React, { Component } from 'react';
import './Bar.scss';

type Props = {
  children?: Node
};

class Bar extends Component<Props> {
  render() {
    return (
      <div className="bar">
        {this.props.children}
      </div>
    );
  }
}

export default Bar;
