import React from 'react';
import { MainBody, MainContainer } from './style';
import Profile from '../Profile';
import Tweets from '../Tweets';
import Tweet from '../Tweet';
import Join from '../Join';

const Main = ({ onToggleSignup, user }) => (
  <MainBody>
    <MainContainer size="normal" padding="normal">
      <Profile user={user} />
      <div className="feed">
        <Tweets />
        <div>
          <Tweet user={user} />
          <Tweet user={user} />
          <Tweet user={user} />
        </div>
      </div>
      <Join onToggleSignup={onToggleSignup} />
    </MainContainer>
  </MainBody>
);

export default Main;
