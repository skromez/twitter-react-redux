import React from "react";
import UserInfoBody from "./style";
import calendar from "../../img/profile/calendar.svg";
import arrow from "../../img/profile/arrow.svg";

const UserInfo = ({ text, icon }) => (
  <UserInfoBody>
    <img
      src={icon === "calendar" ? calendar : arrow}
      alt=""
      className="userInfo__icon"
    />
    <p className="userInfo__text">{text}</p>
  </UserInfoBody>
);

export default UserInfo;
