import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Header from '../Header';
import Error from '../../pages/Error';
import UserPage from '../../pages/UserPage';
import IndexPage from '../../pages/IndexPage';

const Layout = ({ handleModal }) => (
  <>
    <Header handleModal={handleModal} />
    <Switch>
      <Route exact path="/user/">
        <Redirect to="/user/skromez" />
      </Route>
      <Route path="/user/:id">
        <UserPage handleModal={handleModal} />
      </Route>
      <Route exact path="/">
        <IndexPage />
      </Route>
      <Route path={'/*/*' && '/*/'}>
        <Error />
      </Route>
    </Switch>
  </>
);

export default Layout;
