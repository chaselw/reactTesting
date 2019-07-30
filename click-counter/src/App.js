import React, {Component} from 'react';
import authTest from './Auth.js';
import Login from './Modules/Login.js';

class App extends Component {
  auth = authTest;

  render() {
    return (
      <div data-test="component-app">
      <Login auth={this.auth} />
      </div>
    );
  }
}

export default App;
