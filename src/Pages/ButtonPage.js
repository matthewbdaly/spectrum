import React, { Component } from 'react';
import Button from '../Components/Button';

class ButtonPage extends Component {
  render() {
    return (
      <div>
        <p>The default button has a white background</p>
        <Button>Default Button</Button>
        <p>The <code>main</code> theme turns it blue</p>
        <Button theme="main">Button with the main theme</Button>
        <p>The <code>positive</code> theme turns it green</p>
        <Button theme="positive">Button with the positive theme</Button>
        <p>The <code>negative</code> theme turns it red</p>
        <Button theme="negative">Button with the negative theme</Button>
        <p>The <code>inverse</code> property inverts the theme</p>
        <Button theme="main" inverse="true">Button with the inverse main theme</Button>
        <Button theme="positive" inverse="true">Button with the inverse positive theme</Button>
        <Button theme="negative" inverse="true">Button with the inverse negative theme</Button>
        <p>Buttons can also use icons</p>
        <Button>
          <i className="fas fa-undo"></i>
        </Button>
        <Button theme="main">
          <i className="fas fa-folder-open"></i>
        </Button>
        <Button theme="positive">
          <i className="fas fa-smile"></i>
        </Button>
        <Button theme="negative">
          <i className="fas fa-frown"></i>
        </Button>
        <Button theme="main" inverse="true">
          <i className="fas fa-signal"></i>
        </Button>
        <Button theme="positive" inverse="true">
          <i className="fas fa-sliders-h"></i>
        </Button>
        <Button theme="negative" inverse="true">
          <i className="fas fa-times"></i>
        </Button>
        <p>Buttons can be set as "block" buttons</p>
        <Button block="true">Default Button</Button>
        <Button block="true" theme="main">Button with the main theme</Button>
        <Button block="true" theme="positive">Button with the positive theme</Button>
        <Button block="true" theme="negative">Button with the negative theme</Button>
        <Button block="true" theme="main" inverse="true">Button with the inverse main theme</Button>
        <Button block="true" theme="positive" inverse="true">Button with the inverse positive theme</Button>
        <Button block="true" theme="negative" inverse="true">Button with the inverse negative theme</Button>

      </div>
    );
  }
}

export default ButtonPage;
