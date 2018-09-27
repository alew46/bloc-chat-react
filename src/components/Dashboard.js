import React, { Component } from 'react';
import RoomList from './RoomList.js';
import * as firebase from 'firebase';


class Dashboard extends Component {

  render() {
    const {handleRoomChange, currentRoomName} = this.props;
    console.log(this.props)

    return (

      <div className="Dashboard">

      <RoomList
        firebase={firebase}
        handleRoomChange={
          (roomKey, roomName) =>
          handleRoomChange(roomKey, roomName)
        }>
      </RoomList>

      </div>
    );
  }
}


export default Dashboard;
