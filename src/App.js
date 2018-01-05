import React, { Component } from 'react';
import Button from './Button';
import Badge from './Badge';
import Card from './Card';
import TabBar from './TabBar';
import TabBarItem from './TabBarItem';
import ListView from './ListView';
import ListViewItem from './ListViewItem';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import './App.scss';

class ButtonPage extends Component {
  render() {
    return (
      <div>
        <Button>Default Button</Button>
        <Button theme="main">Button with the main theme</Button>
        <Button theme="positive">Button with the positive theme</Button>
        <Button theme="negative">Button with the negative theme</Button>
        <Button theme="main" inverse="true">Button with the inverse main theme</Button>
        <Button theme="positive" inverse="true">Button with the inverse positive theme</Button>
        <Button theme="negative" inverse="true">Button with the inverse negative theme</Button>
      </div>
    );
  }
}

class CardPage extends Component {
  render() {
    return (
      <div>
        <Card header="Default card">This is an example of a default Card component</Card>
        <Card header="Card with list view inside">
          <ListView>
            <ListViewItem>Item 1</ListViewItem>
            <ListViewItem>Item 2</ListViewItem>
            <ListViewItem>Item 3</ListViewItem>
          </ListView>
        </Card>
      </div>
    );
  }
}

class TabBarPage extends Component {
  render() {
    return (
      <TabBar>
        <TabBarItem active="true">Tab 1</TabBarItem>
        <TabBarItem>Tab 2</TabBarItem>
        <TabBarItem>Tab 3</TabBarItem>
        <TabBarItem>Tab 4</TabBarItem>
      </TabBar>
    );
  }
}

class ListViewPage extends Component {
  render() {
    return (
      <ListView>
        <ListViewItem>Item 1</ListViewItem>
        <ListViewItem>Item 2</ListViewItem>
        <ListViewItem>Item 3</ListViewItem>
        <ListViewItem>
          <Badge>5</Badge>
        </ListViewItem>
        <ListViewItem>
          <Badge theme="main">5</Badge>
        </ListViewItem>
        <ListViewItem>
          <Badge theme="positive">5</Badge>
        </ListViewItem>
        <ListViewItem>
          <Badge theme="negative">5</Badge>
        </ListViewItem>
        <ListViewItem>
          <Badge theme="main" inverse="true">5</Badge>
        </ListViewItem>
        <ListViewItem>
          <Badge theme="positive" inverse="true">5</Badge>
        </ListViewItem>
        <ListViewItem>
          <Badge theme="negative" inverse="true">5</Badge>
        </ListViewItem>
      </ListView>
    );
  }
}

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Link to="/buttons">Buttons</Link>
          <Link to="/cards">Cards</Link>
          <Link to="/tab-bars">Tab bars</Link>
          <Link to="/list-views">List views</Link>
          <Route exact path="/buttons" component={ButtonPage} />
          <Route exact path="/cards" component={CardPage} />
          <Route exact path="/tab-bars" component={TabBarPage} />
          <Route exact path="/list-views" component={ListViewPage} />
        </div>
      </Router>
    );
  }
}

export default App;
