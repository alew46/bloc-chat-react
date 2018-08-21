import React, { Component } from 'react';


class MessageList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      messages: []
    };

    this.messagesRef = this.props.firebase.database().ref('messages');

  };

  componentDidMount() {
    this.messagesRef.on('child_added', snapshot => {
      const message = snapshot.val();
      message.key = snapshot.key;
      this.setState( {messages: this.state.messages.concat(message)} )
    });
  }

  render() {

    const currentMessageList = (
      this.state.messages.map( (message) => {
        if (message.roomId === this.props.currentRoom) {
          return <li key={message.key}>{message.message}</li>
        }
      })
    )

    return (
      <div>
        <ul>
          {currentMessageList}
        </ul>
        <p> The message list component thinks {this.props.currentRoomName} is the currently active room and Its key is {this.props.currentRoom}. </p>
      </div>
    )

  };

};

export default MessageList;
