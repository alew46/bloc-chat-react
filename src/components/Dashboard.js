import React, { Component } from 'react';
import RoomList from './RoomList.js';
import MessageList from './MessageList.js'
import * as firebase from 'firebase';


class Dashboard extends Component {

  render() {
    const {handleRoomChange, currentRoomName, currentRoom, currentUser} = this.props;
    console.log(this.props)

    return (

      <div className="Dashboard">

      <p>Current room is: <strong>{this.props.currentRoomName}</strong></p>


      <RoomList
        firebase={firebase}
        handleRoomChange={
          (roomKey, roomName) =>
          handleRoomChange(roomKey, roomName)
        }>
      </RoomList>

      <MessageList
        firebase={firebase}
        currentRoom={this.props.currentRoom}
        currentRoomName={this.props.currentRoomName}
        currentUser={this.props.currentUser}>
      </MessageList>


      </div>
    );
  }
}


export default Dashboard;
