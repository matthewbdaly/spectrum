// @flow
import React, { Component } from 'react';
import type { Node } from 'react';
import './Toast.scss';

type Props = {
  children?: Node,
};

class Toast extends Component<Props> {
  render() {
    return (
      <div className="toast">
        <div className="toast-content">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Toast;
