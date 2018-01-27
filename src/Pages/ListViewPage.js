import React, { Component } from 'react';
import ListView from '../Components/ListView';
import ListViewItem from '../Components/ListViewItem';
import Badge from '../Components/Badge';

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
            <Badge theme="cool">5</Badge>
          </ListViewItem>
          <ListViewItem>
            <Badge theme="warm">5</Badge>
          </ListViewItem>
          <ListViewItem>
            <Badge theme="hot">5</Badge>
          </ListViewItem>
          <ListViewItem>
            <Badge theme="main" inverse="true">5</Badge>
          </ListViewItem>
          <ListViewItem>
            <Badge theme="cool" inverse="true">5</Badge>
          </ListViewItem>
          <ListViewItem>
            <Badge theme="warm" inverse="true">5</Badge>
          </ListViewItem>
          <ListViewItem>
            <Badge theme="hot" inverse="true">5</Badge>
          </ListViewItem>
        </ListView>
      </div>
    );
  }
}

export default ListViewPage;
