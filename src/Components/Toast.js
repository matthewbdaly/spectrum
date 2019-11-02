// @flow
import React from 'react';
import type { Node } from 'react';
import './Toast.scss';

type Props = {
  children?: Node,
};

const Toast = (props: Props) => {
  return (
    <div className="toast">
      <div className="toast-content">
        {props.children}
      </div>
    </div>
  );
}

export default Toast;
