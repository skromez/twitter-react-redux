import React from 'react';
import NotFoundBody from './styles';

const NotFound = ({ id }) => {
  return (
    <NotFoundBody>
      <div className="not-found">
        <h1 className="not-found__title">404 Page Not Found</h1>
        <i className="fas fa-exclamation-triangle not-found__icon"></i>
        <a className="not-found__link" rel="stylesheet" href="/">Go Back</a>
      </div>
    </NotFoundBody>
  );
};

export default NotFound;
