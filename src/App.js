import React, { Component } from 'react';
import Alert from './Components/Alert';
import Bar from './Components/Bar';
import Button from './Components/Button';
import Badge from './Components/Badge';
import Card from './Components/Card';
import TabBar from './Components/TabBar';
import TabBarItem from './Components/TabBarItem';
import ListView from './Components/ListView';
import ListViewItem from './Components/ListViewItem';
import Loader from './Components/Loader';
import Sidebar from './Components/Sidebar';
import TextInput from './Components/TextInput';
import Toggle from './Components/Toggle';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import './App.scss';

const sidebarlinks = [{
  route: "/",
  text: "Home"
}, {
  route: "/alerts",
  text: "Alerts"
}, {
  route: "/bars",
  text: "Bars"
}, {
  route: "/buttons",
  text: "Buttons"
}, {
  route: "/cards",
  text: "Cards"
}, {
  route: "/list-views",
  text: "List Views"
}, {
  route: "/tab-bars",
  text: "Tab Bars"
}, {
  route: "/loader",
  text: "Loader"
}, {
  route: "/demo",
  text: "Demo"
}];

class IndexPage extends Component {
  render() {
    return (
      <div>
        <p>A React component library for use with Phonegap applications.</p>
        <p>These components are thoroughly tested, including snapshot tests, and are thoroughly typed using Flow.</p>
      </div>
    );
  }
}

class AlertPage extends Component {
  render() {
    return (
      <div>
        <Alert>This is a default alert</Alert>
        <Alert theme="main">This is a main alert</Alert>
        <Alert theme="positive">This is a positive alert</Alert>
        <Alert theme="negative">This is a negative alert</Alert>
      </div>
    );
  }
}

class BarPage extends Component {
  render() {
    return (
      <div>
        <Bar>This is a default bar</Bar>
        <Bar theme="main">This is a main bar</Bar>
        <Bar theme="positive">This is a positive bar</Bar>
        <Bar theme="negative">This is a negative bar</Bar>
        <Bar theme="main" inverse="true">This is an inverse main bar</Bar>
        <Bar theme="positive" inverse="true">This is an inverse positive bar</Bar>
        <Bar theme="negative" inverse="true">This is an inverse negative bar</Bar>
      </div>
    );
  }
}

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
            <i className="fas fa-home"></i>
          </TabBarItem>
          <TabBarItem>
            <i className="fas fa-folder"></i>
          </TabBarItem>
          <TabBarItem>
            <i className="fas fa-list"></i>
          </TabBarItem>
          <TabBarItem>
            <i className="fas fa-user"></i>
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

class LoaderPage extends Component {
  render() {
    return (
      <div>
        <Loader />
      </div>
    );
  }
}

class Demo extends Component {
  render() {
    return (
      <div>
        <Bar theme="main">
          <Button theme="main">
            <i className="fas fa-plus"></i>
          </Button>
          Music App
        </Bar>
        <Card header="Queens of the Stone Age">
          <p>Queens of the Stone Age is an American rock band formed in 1996 in Palm Desert, California. The band's line-up includes founder Josh Homme (lead vocals, guitar, piano), alongside longtime members Troy Van Leeuwen (guitar, lap steel, keyboard, percussion, backing vocals), Michael Shuman (bass guitar, keyboard, backing vocals), Dean Fertita (keyboards, guitar, percussion, backing vocals), and recent addition Jon Theodore (drums, percussion).</p>
        </Card>
        <ListView>
          <ListViewItem>Rated R</ListViewItem>
          <ListViewItem>Songs for the Deaf</ListViewItem>
          <ListViewItem>Lullabies to Paralyze</ListViewItem>
        </ListView>
        <Button block="true" theme="positive" inverse="true">I like this</Button>
        <Button block="true" theme="negative" inverse="true">I don't like this</Button>
        <TextInput>Your comment</TextInput>
				<Toggle checked={true} />
        <TabBar>
          <TabBarItem active="true">
            <i className="fas fa-home"></i>
          </TabBarItem>
          <TabBarItem>
            <i className="fas fa-folder"></i>
          </TabBarItem>
          <TabBarItem>
            <i className="fas fa-list"></i>
          </TabBarItem>
          <TabBarItem>
            <i className="fas fa-user"></i>
          </TabBarItem>
        </TabBar>
      </div>
    );
  }
}

type Props = {
  sidebarActive: boolean
};

type State = {
  sidebarActive: boolean
};

class App extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      sidebarActive: false
    };
  }
  toggleSidebar() {
    this.setState({
      sidebarActive: !this.state.sidebarActive
    });
  }
  render() {
    return (
      <Router>
        <div className="App">
          <Sidebar links={sidebarlinks} active={this.state.sidebarActive}>
          </Sidebar>
          <Bar theme="main">
            <Button theme="main" clickHandler={this.toggleSidebar.bind(this)}>
              <i className="fas fa-list"></i>
            </Button>
          </Bar>
          <Route exact path="/" component={IndexPage} />
          <Route exact path="/alerts" component={AlertPage} />
          <Route exact path="/bars" component={BarPage} />
          <Route exact path="/buttons" component={ButtonPage} />
          <Route exact path="/cards" component={CardPage} />
          <Route exact path="/tab-bars" component={TabBarPage} />
          <Route exact path="/list-views" component={ListViewPage} />
          <Route exact path="/loader" component={LoaderPage} />
          <Route exact path="/demo" component={Demo} />
        </div>
      </Router>
    );
  }
}

export default App;
