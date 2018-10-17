import React, { Component }  from 'react';
import User from './User.js';




class Landing extends Component {



  render() {
    const {currentUser, onSetUser, firebase} = this.props;

    return (
      <div className="Landing">

        <h1>Welcome to Bloc Chat.</h1>
        <h3>You must be logged in with a Google account to start chatting!</h3>

        <User
          firebase={firebase}
          setUser={(user) => onSetUser(user)}
          user={currentUser}
        />

      </div>
    );
  }
}

export default Landing;
