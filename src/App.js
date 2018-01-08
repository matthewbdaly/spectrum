import React, { Component } from 'react';
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
import IndexPage from './Pages/IndexPage';
import AlertPage from './Pages/AlertPage';
import BarPage from './Pages/BarPage';
import ButtonPage from './Pages/ButtonPage';
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
				<Toggle theme="" checked={true} />
				<Toggle theme="main" checked={true} />
				<Toggle theme="positive" checked={true} />
				<Toggle theme="negative" checked={true} />
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
