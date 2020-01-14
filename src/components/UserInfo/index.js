import React from 'react';
import UserInfoBody from './style';
import { ReactComponent as Calendar } from '../../assets/images/profile/calendar.svg';
import { ReactComponent as Arrow } from '../../assets/images/profile/arrow.svg';

const UserInfo = ({ text, icon }) => (
  <UserInfoBody>
    {icon === 'calendar' ? <Calendar className="userInfo__icon" /> : <Arrow className="userInfo__icon" />}
    <p className="userInfo__text">{text}</p>
  </UserInfoBody>
);

export default UserInfo;
