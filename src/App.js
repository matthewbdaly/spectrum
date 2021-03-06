import React, { Component } from 'react';
import Bar from './Components/Bar';
import Button from './Components/Button';
import Sidebar from './Components/Sidebar';
import IndexPage from './Pages/IndexPage';
import AlertPage from './Pages/AlertPage';
import BarPage from './Pages/BarPage';
import ButtonPage from './Pages/ButtonPage';
import CardPage from './Pages/CardPage';
import TabBarPage from './Pages/TabBarPage';
import ListViewPage from './Pages/ListViewPage';
import LoaderPage from './Pages/LoaderPage';
import DemoPage from './Pages/DemoPage';
import {
  withRouter,
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
  componentDidMount() {
    this.unlisten = this.props.history.listen(location => {
      this.setState({
        sidebarActive: false
      });
    });
  }
  componentWillUnmount() {
    this.unlisten();
  }
  toggleSidebar() {
    this.setState({
      sidebarActive: !this.state.sidebarActive
    });
  }
  setSidebarInactive() {
    this.setState({
      sidebarActive: false
    });
  }
  render() {
    return (
      <div className="App">
        <Sidebar links={sidebarlinks} active={this.state.sidebarActive} onClickOutside={this.setSidebarInactive.bind(this)}>
        </Sidebar>
        <Bar location="top" theme="main">
          <Button theme="cool" rounded="true" inverse="true" clickHandler={this.toggleSidebar.bind(this)}>
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
        <Route exact path="/demo" component={DemoPage} />
      </div>
    );
  }
}

export default withRouter(App);
