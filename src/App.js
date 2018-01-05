import React, { Component } from 'react';
import Button from './Components/Button';
import Badge from './Components/Badge';
import Card from './Components/Card';
import TabBar from './Components/TabBar';
import TabBarItem from './Components/TabBarItem';
import ListView from './Components/ListView';
import ListViewItem from './Components/ListViewItem';
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
          <i class="fas fa-undo"></i>
        </Button>
        <Button theme="main">
          <i class="fas fa-folder-open"></i>
        </Button>
        <Button theme="positive">
          <i class="fas fa-smile"></i>
        </Button>
        <Button theme="negative">
          <i class="fas fa-frown"></i>
        </Button>
        <Button theme="main" inverse="true">
          <i class="fas fa-signal"></i>
        </Button>
        <Button theme="positive" inverse="true">
          <i class="fas fa-sliders-h"></i>
        </Button>
        <Button theme="negative" inverse="true">
          <i class="fas fa-times"></i>
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

class CardPage extends Component {
  render() {
    return (
      <div>
        <p>Cards are simple containers for your content. They include a header field.</p>
        <Card header="Default card">This is an example of a default Card component</Card>
        <p>Cards can contain listviews.</p>
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
      <div>
        <p>Tab bars are bars that can contain multiple <code>TabBarItem</code> components. They use Flexbox so you should be able to add as many as you need and as long as you don't go overboard they should Just Work.</p>
        <TabBar>
          <TabBarItem active="true">Tab 1</TabBarItem>
          <TabBarItem>Tab 2</TabBarItem>
          <TabBarItem>Tab 3</TabBarItem>
          <TabBarItem>Tab 4</TabBarItem>
        </TabBar>
        <p> A <code>TabBarItem</code> can use your choice of icon in the content.</p>
        <TabBar>
          <TabBarItem active="true">
            <i class="fas fa-home"></i>
          </TabBarItem>
          <TabBarItem>
            <i class="fas fa-folder"></i>
          </TabBarItem>
          <TabBarItem>
            <i class="fas fa-list"></i>
          </TabBarItem>
          <TabBarItem>
            <i class="fas fa-user"></i>
          </TabBarItem>
        </TabBar>
      </div>
    );
  }
}

class ListViewPage extends Component {
  render() {
    return (
      <div>
        <p>List views are formatted lists of <code>ListViewItem</code> components, which themselves can contain <code>Badge</code> components.</p>

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
      </div>
    );
  }
}

class Demo extends Component {
  render() {
    return (
      <div>
        <Card header="Queens of the Stone Age">
          <p>Founded by Josh Homme after Kyuss disbanded.</p>
        </Card>
        <ListView>
          <ListViewItem>Rated R</ListViewItem>
          <ListViewItem>Songs for the Deaf</ListViewItem>
          <ListViewItem>Lullabies to Paralyze</ListViewItem>
        </ListView>
        <TabBar>
          <TabBarItem active="true">
            <i class="fas fa-home"></i>
          </TabBarItem>
          <TabBarItem>
            <i class="fas fa-folder"></i>
          </TabBarItem>
          <TabBarItem>
            <i class="fas fa-list"></i>
          </TabBarItem>
          <TabBarItem>
            <i class="fas fa-user"></i>
          </TabBarItem>
        </TabBar>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Link to="/buttons">
            <Button theme="main">Buttons</Button>
          </Link>
          <Link to="/cards">
            <Button theme="main">Cars</Button>
          </Link>
          <Link to="/tab-bars">
            <Button theme="main">Tab Bars</Button>
          </Link>
          <Link to="/list-views">
            <Button theme="main">List Views</Button>
          </Link>
          <Link to="/demo">
            <Button theme="main">Demo</Button>
          </Link>
          <Route exact path="/buttons" component={ButtonPage} />
          <Route exact path="/cards" component={CardPage} />
          <Route exact path="/tab-bars" component={TabBarPage} />
          <Route exact path="/list-views" component={ListViewPage} />
          <Route exact path="/demo" component={Demo} />
        </div>
      </Router>
    );
  }
}

export default App;
