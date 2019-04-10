import React from 'react';

const ButtonStyle = {
  borderRadius: '3px',
  background: 'rgb(3, 174, 243)',
  color: 'white',
  border: 'none',
  padding: '.5rem 1rem',
  fontWeight: 700,
  borderBottom: '2px solid rgb(2, 143, 199)',
};

const Button = ({ handleClick, children }) => (
  <button style={ButtonStyle} onClick={handleClick}>
    {children}
  </button>
);

export default Button;
