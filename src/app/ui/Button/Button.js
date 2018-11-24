import React from 'react';

const Button = ({ clicked, label, type }) => (
  <button
    className={`btn ${getBtnStyleByType(type)}`}
    onClick={clicked}>
    label
  </button>
);

const getBtnStyleByType = (type) => {
  const styles = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    success: 'btn-success',
    danger: 'btn-danger',
    warning: 'btn-warning',
    info: 'btn-info',
    light: 'btn-light',
    dark: 'btn-dark',
    link: 'btn-link',
  }
  return styles[type];
}

export default Button;