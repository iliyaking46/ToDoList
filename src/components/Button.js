import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.string,
};

const defaultProps = {
  children: '',
};

export const Button = ({ onClick, children }) => (
  <button className="btn btn-primary mx-3" onClick={onClick}>
    {children}
  </button>
);

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
