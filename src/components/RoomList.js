import React, { Component } from 'react';


class RoomList extends Component {
  constructor(props) {
    super(props);

    this.state = {
        rooms: [],
        newRoomName: ""
      };

    this.roomsRef = this.props
    .firebase.database().ref('rooms');

  }

  componentDidMount() {
    this.roomsRef.on('child_added', snapshot => {
      const room = snapshot.val();
      room.key = snapshot.key;
      this.setState( {rooms: this.state.rooms.concat(room)} )
    });
  }

  handleChange(e) {
    this.setState( {newRoomName: e.target.value} );
  };

  createRoom(e) {
    this.roomsRef.push( {name: this.state.newRoomName} );
    this.setState( {newRoomName: ""} );
    e.preventDefault();
  };

  render() {

    return (
      <section className="room-list">
        <ul>
          {
            this.state.rooms.map( (room) =>
              <li key={room.key} onClick={() => this.props.handleRoomChange(room.key, room.name)}>{room.name}</li>
            )
          }
        </ul>
        <form onSubmit={ (e) => this.createRoom(e) }>
        <label>
          Add a chatroom:
          <input type="text" value={this.state.newRoomName} onChange={ (e) => this.handleChange(e) } />
        </label>
        <input type="submit" value="Submit" />
      </form>
      </section>
    );
  }


}


export default RoomList;
