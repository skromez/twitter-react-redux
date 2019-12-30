import React from "react";
import Avatar from "../Avatar";
import User from "../User";
import TweetBody from "./style";

const Tweet = () => (
  <TweetBody>
    <Avatar size="normal" />
    <div>
      <User direction="row" name="Dmitry Novikov" nick="skromez" />
      <p className="tweet__text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
    </div>
  </TweetBody>
);

export default Tweet;
