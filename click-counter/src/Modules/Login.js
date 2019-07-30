import React, {Component} from 'react';

export default class Login extends Component {
  render() {

    if(this.props.auth.isLoggedIn()){
      return (<h2 data-test="Logged-In-True">Is Logged In Is True</h2>);
    }else{
      return (<h2 data-test="Logged-In-False">Is Logged In Is Not True</h2>);
    }
  }
}
