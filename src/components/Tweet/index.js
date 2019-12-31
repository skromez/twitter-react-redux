import React from "react";
import Avatar from "../Avatar";
import User from "../User";
import TweetBody from "./style";
import Data from "../Data";
import Like from "../Like";
import UserAvatar from "../../img/profile/avatar.jpg";


const Tweet = () => (
  <TweetBody>
    <Avatar avatar={UserAvatar} className="tweet__avatar" size="normal" />
    <div>
      <div className="tweet__container">
        <User
          className="tweet__user"
          direction="row"
          name="Dmitry Novikov"
          nick="skromez"
        />
        <Data className="tweet__data" data="1 Aug" />
      </div>
      <p className="tweet__text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
      <Like amount="15" fill="none" stroke="#657786" />
    </div>
  </TweetBody>
);

export default Tweet;
