import React, { Component } from 'react';
import './Badge.scss';

class Badge extends Component {
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
      <span className={ 'badge' + (this.state.theme ? (' ' + this.state.theme) : '') }>
        {this.props.children}
      </span>
    );
  }
}

export default Badge;
