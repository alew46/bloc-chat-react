import React, { Component } from 'react';


class MessageList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      messages: [],
      newMessageMessage: "",
      newMessageRoomId: "",
      newMessageSentAt: "",
      newMessageUsername: "",
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

  handleChange(e) {
    this.setState( {
      newMessageMessage: e.target.value,
      newMessageRoomId: this.props.currentRoom,
      newMessageSentAt: this.props.firebase.database.ServerValue.TIMESTAMP,
      newMessageUsername: this.props.currentUser.displayName
    } )
  }

  createMessage(e) {
    this.messagesRef.push( {
      message: this.state.newMessageMessage,
      roomId: this.state.newMessageRoomId,
      sentAt: this.state.newMessageSentAt,
      username: this.state.newMessageUsername
    } )

    this.setState( {
      newMessageMessage: ""
    } )

    e.preventDefault();
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
        <h3>Add New Message</h3>
        <form onSubmit={ (e) => this.createMessage(e) }>
        <label>
          <input type="text" value={this.state.newMessageMessage} onChange={ (e) => this.handleChange(e) } />
        </label>
        <input type="submit" value="Submit" />
      </form>
      </div>
    )

  };

};

export default MessageList;
