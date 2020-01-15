import React from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import User from './pages/User';
import Modal from './components/Modal';
import Login from './components/Login';
import SignUp from './components/SignUp';
import NotFound from './components/NotFound';
import MyProvider from './components/Context/MyProvider';

const App = () => (
  <MyProvider>
    <Router>
      <Switch>
        <Route exact path={'/user/' && '/'}>
          <Redirect to="/user/skromez" />
        </Route>
        <Route path="/user/:id">
          <User />
        </Route>
        <Route path="/*/">
          <NotFound />
        </Route>
      </Switch>
      <Modal />
      <SignUp />
      <Login />
    </Router>
  </MyProvider>
);

export default App;
