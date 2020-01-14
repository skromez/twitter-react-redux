import React from 'react';
import Header from '../components/Header';
import Cover from '../components/Cover';
import Main from '../components/Main';
import Modal from '../components/Modal';
import SignUp from '../components/SignUp';
import Login from '../components/Login';

const User = (
  {
    state,
    onToggleSignup,
    onToggleLogin,
  },
) => {
  return (
    <div>
      <Header
        onToggleLogin={onToggleLogin}
        onToggleSignup={onToggleSignup}
      />
      <Cover />
      <Main onToggleSignup={onToggleSignup} />
      <Modal />
      <SignUp
        onToggleSignup={onToggleSignup}
        shown={state.shownSignup}
      />
      <Login
        onToggleLogin={onToggleLogin}
        shown={state.shownLogin}
      />
    </div>
  );
};

export default User;
