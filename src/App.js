import React, { Component } from 'react';
import Button from './Button';
import Card from './Card';
import TabBar from './TabBar';
import TabBarItem from './TabBarItem';
import ListView from './ListView';
import ListViewItem from './ListViewItem';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Button>Default Button</Button>
        <Button theme="main">Button with the main theme</Button>
        <Button theme="positive">Button with the positive theme</Button>
        <Button theme="negative">Button with the negative theme</Button>
        <Button theme="main" inverse="true">Button with the inverse main theme</Button>
        <Button theme="positive" inverse="true">Button with the inverse positive theme</Button>
        <Button theme="negative" inverse="true">Button with the inverse negative theme</Button>
        <Card header="Default card">This is an example of a default Card component</Card>
        <TabBar>
          <TabBarItem active="true">Tab 1</TabBarItem>
          <TabBarItem>Tab 2</TabBarItem>
          <TabBarItem>Tab 3</TabBarItem>
          <TabBarItem>Tab 4</TabBarItem>
        </TabBar>
        <ListView>
          <ListViewItem>Item 1</ListViewItem>
          <ListViewItem>Item 2</ListViewItem>
          <ListViewItem>Item 3</ListViewItem>
        </ListView>
      </div>
    );
  }
}

export default App;
