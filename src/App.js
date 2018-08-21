import React, { Component } from 'react';
import './App.css';
import * as firebase from 'firebase';
import RoomList from './components/RoomList.js'
import MessageList from './components/MessageList.js'

// Initialize Firebase
  var config = {
    apiKey: "AIzaSyBug4r6gVD3IInxFw1gB0a9CmxzW6n7Isw",
    authDomain: "bloc-chat-react-d01a1.firebaseapp.com",
    databaseURL: "https://bloc-chat-react-d01a1.firebaseio.com",
    projectId: "bloc-chat-react-d01a1",
    storageBucket: "bloc-chat-react-d01a1.appspot.com",
    messagingSenderId: "986986201969"
  };
  firebase.initializeApp(config);

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
        currentRoom: "",
        currentRoomName: ""
      };


  }

  setActiveRoom(roomKey, roomName) {
    this.setState( {currentRoom: roomKey} );
    this.setState( {currentRoomName: roomName} );
  }

  handleRoomChange(roomKey, roomName) {
    this.setActiveRoom(roomKey, roomName);
  }

  render() {
    return (
      <div className="App">

      <RoomList
        firebase={firebase}
        handleRoomChange={(roomKey, roomName) => this.handleRoomChange(roomKey, roomName)}></RoomList>

      <p>Current room is: <strong>{this.state.currentRoomName}</strong></p>

      <MessageList
        firebase={firebase}
        currentRoom={this.state.currentRoom}
        currentRoomName={this.state.currentRoomName}></MessageList>


      </div>
    );
  }
}

export default App;
