import React, { Component } from 'react';
import Button from '../Components/Button';
import Card from '../Components/Card';
import ListView from '../Components/ListView';
import ListViewItem from '../Components/ListViewItem';
import TextInput from '../Components/TextInput';
import Toggle from '../Components/Toggle';
import TabBar from '../Components/TabBar';
import TabBarItem from '../Components/TabBarItem';
import Toast from '../Components/Toast';

class DemoPage extends Component {
  render() {
    return (
      <div>
        <Toast>
          <h1>New message</h1>
          <p>New message received</p>
        </Toast>
        <Card header="Queens of the Stone Age">
          <p>Queens of the Stone Age is an American rock band formed in 1996 in Palm Desert, California. The band's line-up includes founder Josh Homme (lead vocals, guitar, piano), alongside longtime members Troy Van Leeuwen (guitar, lap steel, keyboard, percussion, backing vocals), Michael Shuman (bass guitar, keyboard, backing vocals), Dean Fertita (keyboards, guitar, percussion, backing vocals), and recent addition Jon Theodore (drums, percussion).</p>
        </Card>
        <ListView>
          <ListViewItem>Rated R</ListViewItem>
          <ListViewItem>Songs for the Deaf</ListViewItem>
          <ListViewItem>Lullabies to Paralyze</ListViewItem>
        </ListView>
        <Button block="true" theme="cool" inverse="true">I like this</Button>
        <Button block="true" theme="negative" inverse="true">I don't like this</Button>
        <TextInput>Your comment</TextInput>
				<Toggle theme="" checked={true} />
				<Toggle theme="main" checked={true} />
				<Toggle theme="cool" checked={true} />
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

export default DemoPage;
