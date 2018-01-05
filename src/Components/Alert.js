// @flow
import React, { Component } from 'react';
import './Alert.scss';

type Props = {
  theme: string,
  children: mixed
};

type State = {
  theme: string
};

class Alert extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      theme: 'alert' + (this.props.theme ? (' ' + this.props.theme) : '')
    };
  }
  render() {
    return (
      <div className={this.state.theme}>
        {this.props.children}
      </div>
    );
  }
}

export default Alert;
