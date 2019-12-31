import React from "react";
import AvatarBody from "./style";

const Avatar = ({ size, className, avatar }) => (
  <AvatarBody className={className} size={size}>
    <img src={avatar} alt="Avatar" className="avatar__image" />
  </AvatarBody>
);

export default Avatar;
