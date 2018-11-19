import React from 'react';
import ReactDOM from 'react-dom';
import Sidebar from './Sidebar';
import { BrowserRouter as Router } from 'react-router-dom';

const sidebarlinks = [{
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

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Router>
      <Sidebar links={sidebarlinks} />
    </Router>,
    div
  );
});
