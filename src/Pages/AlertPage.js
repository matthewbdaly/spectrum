import React, { Component } from 'react';
import Alert from '../Components/Alert';

class AlertPage extends Component {
  render() {
    return (
      <div>
        <Alert>This is a default alert</Alert>
        <Alert theme="main">This is a main alert</Alert>
        <Alert theme="positive">This is a positive alert</Alert>
        <Alert theme="negative">This is a negative alert</Alert>
      </div>
    );
  }
}

export default AlertPage;