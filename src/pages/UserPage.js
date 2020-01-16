import React from 'react';
import Cover from '../components/Cover';
import Main from '../components/Main';

const UserPage = ({ handleModal }) => {
  return (
    <>
      <Cover />
      <Main handleModal={handleModal} />
    </>
  );
};

export default UserPage;
