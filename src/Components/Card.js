// @flow
import React, { Component } from 'react';
import type { Node } from 'react';
import './Card.scss';

type Props = {
  header?: Node,
  children?: Node
}

class Card extends Component<Props> {
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
