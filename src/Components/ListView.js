import React, { Component } from 'react';
import './ListView.scss';

class ListView extends Component {
  render() {
    return (
      <ul className="listview">
        {this.props.children}
      </ul>
    );
  }
}

export default ListView;
