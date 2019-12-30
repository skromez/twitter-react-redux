import React from "react";
import TweetsBody from "./style";

const Tweets = () => (
  <TweetsBody>
    <input id="tweets" className="tweets__radio" type="radio" defaultChecked />
    <label htmlFor="tweets" className="tweets__label label">
      <p className="label__tweets">Tweets</p>
      <p className="label__amount">15</p>
    </label>
  </TweetsBody>
);

export default Tweets;
