import React from 'react';
import { MainBody, MainContainer } from './style';
import Profile from '../Profile';
import Tweets from '../Tweets';
import Tweet from '../Tweet';
import Join from '../Join';

const Main = () => (
  <MainBody>
    <MainContainer size="normal" padding="normal">
      <Profile />
      <div className="feed">
        <Tweets />
        <div>
          <Tweet />
          <Tweet />
          <Tweet />
        </div>
      </div>
      <Join />
    </MainContainer>
  </MainBody>
);

export default Main;
