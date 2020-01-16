import React from 'react';
import { MainBody, MainContainer } from './style';
import Profile from '../Profile';
import Tweets from '../Tweets';
import Tweet from '../Tweet';
import Join from '../Join';

const Main = ({ handleModal }) => (
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
      <Join handleModal={handleModal} />
    </MainContainer>
  </MainBody>
);

export default Main;
