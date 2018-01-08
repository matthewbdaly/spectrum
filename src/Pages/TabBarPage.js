import React, { Component } from 'react';
import TabBar from '../Components/TabBar';
import TabBarItem from '../Components/TabBarItem';

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

export default TabBarPage;
