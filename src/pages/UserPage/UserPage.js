import React from 'react';
import Header from '../../components/Header';
import Cover from '../../components/Cover';
import Main from '../../components/Main';
import Modal from '../../components/Modal';
import SignUp from '../../components/SignUp';
import Login from '../../components/Login';

const UserPage = () => {
  return (
    <div>
      <Header />
      <Cover />
      <Main />
      <Modal />
      <SignUp />
      <Login />
    </div>
  );
};

export default UserPage;
