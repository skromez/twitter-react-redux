import React from "react";
import { MainBody, MainContainer } from "./style";
import Profile from "../Profile";
import sticker from "../../img/join-us/sticker.png";
import Tweets from "../Tweets";
import Tweet from "../Tweet";

const Main = () => (
  <MainBody>
    <MainContainer size="normal" padding="normal" class="check">
      <Profile />
      <div className="feed">
        <Tweets />
        <div>
          <Tweet />
          <Tweet />
          <Tweet />
          <Tweet />
        </div>
      </div>
      <div className="join-us">
        <img src={sticker} alt="Sticker" />

        <h2 className="join-us__heading">
          Hey! <br /> Why don't you join us?
        </h2>
        <p className="join-us__text">
          It's simple - just click on sign up
          <br /> button!
        </p>
        <button type="button" className="auth__button auth__button--signup">
          Sign Up
        </button>
      </div>
    </MainContainer>
  </MainBody>
);

export default Main;
