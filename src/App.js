import React, { Component } from 'react';
import { Route, Link, Redirect } from 'react-router-dom';
import './App.css';
import * as firebase from 'firebase';
import RoomList from './components/RoomList.js';
import MessageList from './components/MessageList.js';
import User from './components/User.js';
import Dashboard from './components/Dashboard.js';
import Landing from './components/Landing.js';

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
        currentRoomName: "",
        currentUser: ""
      };

  }

  setActiveRoom(roomKey, roomName) {
    this.setState( {currentRoom: roomKey} );
    this.setState( {currentRoomName: roomName} );
  }

  handleRoomChange(roomKey, roomName) {
    this.setActiveRoom(roomKey, roomName);
  }

  setUser(user) {
    console.log("App.js' setUser got called!")
    this.setState( {currentUser: user} )
    console.log(user ? "true" : "false")
  }


  render() {

    return (
      <div className="App">

      <nav>
        <Link to='/'>Landing</Link>
        <Link to='/dashboard'>Dashboard</Link>
      </nav>

      <main>
        <Route exact path="/" render={() => <Landing onSetUser={(user) => this.setUser(user)}  currentUser={this.state.currentUser} firebase={firebase}/>}/>
        <Route path="/dashboard" render={() => (
          this.state.currentUser
            ?
          (<div>
            <Dashboard handleRoomChange={(roomKey, roomName) => this.handleRoomChange(roomKey, roomName) } currentRoomName={this.state.currentRoomName} />
            <MessageList currentRoom={this.state.currentRoom} currentRoomName={this.state.currentRoomName} currentUser={this.state.currentUser} firebase={firebase} />
          </div>)
            :
          <Redirect to='/' />
        )}
        />
      </main>

      </div>
    );
  }
}

export default App;
