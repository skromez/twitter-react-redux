import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, useParams, Redirect } from 'react-router-dom';
import User from './pages/User';
import Modal from './components/Modal';
import Login from './components/Login';
import SignUp from './components/SignUp';
import NotFound from './components/NotFound';

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
    const { shownSignup, shownLogin, user } = this.state;
    return (
      <Router>
        <Switch>
          <Route exact path={'/user/' && '/'}>
            <Redirect to={`/user/skromez`} />
          </Route>
          <Route path={`/user/:id`}>
            <UserBody
              onToggleLogin={this.onToggleLogin}
              onToggleSignup={this.onToggleSignup}
            />
          </Route>
          <Route path="/*/">
            <NotFound/>
          </Route>
        </Switch>
        <Modal user={user} />
        <SignUp
          onToggleSignup={this.onToggleSignup}
          shown={shownSignup}
        />
        <Login
          onToggleLogin={this.onToggleLogin}
          shown={shownLogin}
        />
      </Router>
    );
  }
};

const UserBody = ({ onToggleLogin, onToggleSignup }) => {
  let { id } = useParams();
  return (
    <User
      onToggleLogin={onToggleLogin}
      onToggleSignup={onToggleSignup}
      user={id}
    />
  )
};



export default App;
