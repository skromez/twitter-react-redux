import React from 'react';
import Header from '../components/Header';
import Cover from '../components/Cover';
import Main from '../components/Main';

const User = (
  {
    onToggleSignup,
    onToggleLogin,
    user,
  },
) => {
  return (
    <div>
      <Header
        onToggleLogin={onToggleLogin}
        onToggleSignup={onToggleSignup}
      />
      <Cover />
      <Main user={user} onToggleSignup={onToggleSignup} />
    </div>
  );
};

export default User;
