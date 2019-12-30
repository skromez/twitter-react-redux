import React from "react";
import AvatarBody from "./style";
import avatar from "../../img/profile/avatar.jpg";

const Avatar = ({ size }) => (
  <AvatarBody size={size}>
    <img src={avatar} alt="Avatar" className="avatar__image" />
  </AvatarBody>
);

export default Avatar;
