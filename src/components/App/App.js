import React from 'react';
import { BrowserRouter as Router, } from 'react-router-dom';
import { connect } from 'react-redux';
import TweetModal from '../TweetModal';
import Login from '../Login';
import Layout from '../Layout';
import SignUpModal from '../SignUpModal';
import * as actions from '../../actions/actions';

const App = (props) => {
  const { state: { TWEET, LOGIN, SIGNUP } } = props;
  return (
    <div className="app">
      <Router>
        <Layout />
        {TWEET && <TweetModal />}
      </Router>
      {SIGNUP && <SignUpModal />}
      {LOGIN && <Login />}
    </div>
  );
};

const mapStateToProps = (state) => ({ state });
export default connect(mapStateToProps, actions)(App);
