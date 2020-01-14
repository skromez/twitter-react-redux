import React, { Component } from 'react';
import User from './pages/User';

class App extends Component {
  state = {
    shownLogin: false,
    shownSignup: false,
  };

  onToggleSignup = () => {
    this.setState(({ shownSignup }) => {
      return {
        shownSignup: !shownSignup
      };
    });
  };

  onToggleLogin = () => {
    this.setState(({ shownLogin }) => {
      return {
        shownLogin: !shownLogin
      };
    });
  };

  render() {
    const state = this.state;
    return (
      <User
        onToggleLogin={this.onToggleLogin}
        onToggleSignup={this.onToggleSignup}
        state={state}
      />
    );
  }
};

export default App;
