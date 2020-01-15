import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import Cover from '../components/Cover';
import Main from '../components/Main';

const User = (
  {
    onToggleSignup
  },
) => {
  const { id } = useParams();
  return (
    <div>
      <Header />
      <Cover />
      <Main user={id} onToggleSignup={onToggleSignup} />
    </div>
  );
};

export default User;
