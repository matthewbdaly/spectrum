// @flow
import React from 'react';
import type { Node } from 'react';
import './Alert.scss';

type Props = {
  theme: string,
  children?: Node,
  dismissable: boolean
};

const Alert = (props: Props) => {
  let theme = 'alert' + (props.theme ? (' ' + props.theme) : '');
  return (
    <div className={theme}>
      {props.children}
    </div>
  );
}

export default Alert;
