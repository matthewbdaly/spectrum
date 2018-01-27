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
        <p>The <code>cool</code> theme turns it green</p>
        <Button theme="cool">Button with the cool theme</Button>
        <p>The <code>hot</code> theme turns it red</p>
        <Button theme="hot">Button with the hot theme</Button>
        <p>The <code>inverse</code> property inverts the theme</p>
        <Button theme="main" inverse="true">Button with the inverse main theme</Button>
        <Button theme="cool" inverse="true">Button with the inverse cool theme</Button>
        <Button theme="hot" inverse="true">Button with the inverse hot theme</Button>
        <p>Buttons can also use icons</p>
        <Button>
          <i className="fas fa-undo"></i>
        </Button>
        <Button theme="main">
          <i className="fas fa-folder-open"></i>
        </Button>
        <Button theme="cool">
          <i className="fas fa-smile"></i>
        </Button>
        <Button theme="hot">
          <i className="fas fa-frown"></i>
        </Button>
        <Button theme="main" inverse="true">
          <i className="fas fa-signal"></i>
        </Button>
        <Button theme="cool" inverse="true">
          <i className="fas fa-sliders-h"></i>
        </Button>
        <Button theme="hot" inverse="true">
          <i className="fas fa-times"></i>
        </Button>
        <p>Buttons can be set as "block" buttons</p>
        <Button block="true">Default Button</Button>
        <Button block="true" theme="main">Button with the main theme</Button>
        <Button block="true" theme="cool">Button with the cool theme</Button>
        <Button block="true" theme="hot">Button with the hot theme</Button>
        <Button block="true" theme="main" inverse="true">Button with the inverse main theme</Button>
        <Button block="true" theme="cool" inverse="true">Button with the inverse cool theme</Button>
        <Button block="true" theme="hot" inverse="true">Button with the inverse hot theme</Button>
        <p>Buttons can be set as "rounded" buttons</p>
        <Button rounded="true">Default Button</Button>
        <Button rounded="true" theme="main">Button with the main theme</Button>
        <Button rounded="true" theme="cool">Button with the cool theme</Button>
        <Button rounded="true" theme="hot">Button with the hot theme</Button>
        <Button rounded="true" theme="main" inverse="true">Button with the inverse main theme</Button>
        <Button rounded="true" theme="cool" inverse="true">Button with the inverse cool theme</Button>
        <Button rounded="true" theme="hot" inverse="true">Button with the inverse hot theme</Button>
      </div>
    );
  }
}

export default ButtonPage;
