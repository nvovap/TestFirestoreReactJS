import React, { Component } from 'react'
import  { signIn, signOut } from '../actions'
import { connect } from 'react-redux';

//https://github.com/nabendu82/streams

class GoogleAuth extends Component {

  auth = ""

  componentDidMount() {
    console.log('componentDidMount')
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId: '',
        scope: 'email'
      }).then(() => {
        this.auth = window.gapi.auth2.getAuthInstance();
        this.onAuthChange(this.auth.isSignedIn.get());
        this.auth.isSignedIn.listen(this.onAuthChange);
      }).catch(error => console.log(error));
    });
  }


  onAuthChange = (isSignedIn) => {
    if (isSignedIn) {
      console.log('sing in')
      this.props.signIn(this.auth.currentUser.get().getId());
    } else {
      this.props.signOut();
      console.log('sing out')
    }
  }

  onSignInClick = () => {
     this.auth.signIn();
  }

  onSignOutClick = () => {
    this.auth.signOut();
  }

  renderAuthButton() {
    if (this.props.isSignedIn === null) {
      return null;
    } else if (this.props.isSignedIn) {
      return (
        <button
          className="loginBtn loginBtn--google"
          onClick={this.onSignOutClick}>Log Out</button>
      )
    } else {
      return (
        <button
          className="loginBtn loginBtn--google"
          onClick={this.onSignInClick}>Login With Google</button>
      )
    }
  }

  render() {
    return (
      <div>
        {this.renderAuthButton()}
      </div>
    )
  }
}


const mapStateToProps = (state) => {
return { isSignedIn: state.auth.isSignedIn };
}

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);


//export default GoogleAuth;