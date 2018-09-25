import React, { Component } from 'react';



class User extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: "no user"
      };
  }

  handleSignIn() {
    const provider = new this.props.firebase.auth.GoogleAuthProvider();
    this.props.firebase.auth().signInWithRedirect(provider);
  }

  handleSignOut() {
    this.props.firebase.auth().signOut();
  }

  componentDidMount() {
    this.props.firebase.auth().onAuthStateChanged( user => {
      this.props.setUser(user);
    });
  }

  render() {

    return (
      <div>
        <button onClick={() => this.handleSignIn()}>Sign In</button>
        <button onClick={() => this.handleSignOut()}>Sign Out</button>
        <h1>The current user is {this.props.user ? this.props.user.displayName : "guest"}</h1>
      </div>
    );
  }
}

export default User;
