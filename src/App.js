import React, { Component } from 'react';
import { BrowserRouter as Router, } from 'react-router-dom';
import TweetModal from './components/TweetModal';
import SignUp from './components/SignUp';
import Login from './components/Login';
import Layout from './components/Layout';
import SignUpModal from './components/SignUpModal';

class App extends Component {
  state = {
    login: false,
    signUp: false,
    tweet: false,
  };
  handleModal = (type) => {
    this.setState((prevState) => ({
      ...prevState,
      [type]: !prevState[type]
    }))
  };

  render() {
    const { tweet, signUp, login } = this.state;
    return (
      <div className="app">
        <Router>
          <Layout handleModal={this.handleModal} />
          {tweet && <TweetModal handleModal={this.handleModal} />}
        </Router>
        {signUp && <SignUpModal handleModal={this.handleModal} />}
        {login && <Login handleModal={this.handleModal} />}
      </div>
    )
  }
}


export default App;
