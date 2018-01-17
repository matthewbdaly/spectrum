import React, { Component } from 'react';
import Card from '../Components/Card';
import ListView from '../Components/ListView';
import ListViewItem from '../Components/ListViewItem';

class CardPage extends Component {
  render() {
    return (
      <div className="wrapper">
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

export default CardPage;
