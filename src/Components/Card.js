import React, { Component } from 'react';
import './Card.scss';

class Card extends Component {
  render() {
    return (
      <section className="card">
        <section className="header">
          <strong>{this.props.header}</strong>
        </section>
        <section className="body">
          {this.props.children}
        </section>
      </section>
    );
  }
}

export default Card;
