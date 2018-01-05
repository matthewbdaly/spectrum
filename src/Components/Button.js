import React, { Component } from 'react';
import './Button.scss';

class Button extends Component {
  constructor(props) {
    super(props);
    let theme = this.props.theme;
    if (this.props.inverse) {
      theme += " inverse";
    }
    this.state = {
      theme: theme
    };
  }
  render() {
    return (
      <button className={this.state.theme}>{this.props.children}</button>
    );
  }
}

export default Button;
