// @flow
import React from 'react';
import type { Node } from 'react';
import './Card.scss';

type Props = {
  header?: Node,
  children?: Node
}

const Card = (props: Props) => {
    return (
      <section className="card">
        <section className="header">
          <strong>{props.header}</strong>
        </section>
        <section className="body">
          {props.children}
        </section>
      </section>
    );
}

export default Card;
