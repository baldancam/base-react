import React from 'react';
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function MyRoute({ element, isClosed, ...rest }) {
  const isLoggedId = false;

  if (isClosed && !isLoggedId) {
    return (
      <Navigate to="/login" state={{ prevPath: rest.location?.pathname }} />
    );
  }

  return element;
}

MyRoute.propTypes = {
  element: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired,
  // eslint-disable-next-line react/require-default-props
  isClosed: PropTypes.bool,
};
