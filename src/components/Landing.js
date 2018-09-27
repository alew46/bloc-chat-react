import React, { Component }  from 'react';
import User from './User.js';
import * as firebase from 'firebase';




class Landing extends Component {
  constructor(props) {
    super(props);

  }



  render() {
    const {currentUser, onSetUser} = this.props;
    console.log(this.props)
    return (
      <div className="Landing">

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
