import React from "react";
import ProfileBody from "./style";
import Avatar from "../Avatar";
import User from "../User";
import UserInfo from "../UserInfo";

const Profile = () => (
  <ProfileBody>
    <Avatar size="big" />
    <User direction="columnBig" name="Dmitry Novikov" nick="skromez" />
    <UserInfo text="Joined September 2013" icon="calendar" />
    <UserInfo text="Sochi, Russia" icon="arrow" />
  </ProfileBody>
);

export default Profile;
