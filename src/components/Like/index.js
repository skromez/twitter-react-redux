import React from "react";
import LikeBody from "./style";
import { ReactComponent as Icon } from "../../img/tweet/like.svg";

const Like = ({ amount, fill, stroke }) => (
  <LikeBody>
    <Icon fill={fill} stroke={stroke} />
    <p className="like__text">{amount}</p>
  </LikeBody>
);

export default Like;
