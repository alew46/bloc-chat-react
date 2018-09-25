import React, { Component }  from 'react';
import User from './User.js';
import * as firebase from 'firebase';




class Landing extends Component {
  constructor(props) {
    super(props);

    this.state = {
        currentUser: ""
      };
  }

  setUser(user) {
    this.setState( {currentUser: user} )
  }


  render() {
    return (
      <div className="Landing">

        <User
          firebase={firebase}
          setUser={(user) => this.setUser(user)}
          user={this.state.currentUser}
        />

      </div>
    );
  }
}

export default Landing;
