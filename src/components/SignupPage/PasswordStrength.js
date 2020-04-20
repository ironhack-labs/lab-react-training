// components/SignupPage/PasswordStrength.js

import React from 'react';

const PasswordStrength = (props) => {
  const { passwordStrength } = props;
  const passwordMessage = passwordResponse(passwordStrength);
  const divStyle = {
    color: passwordMessage.color,
  }
  return (
    <div className='password-strength' style={divStyle}>
      {passwordMessage.text}
    </div>
  );
}

const passwordResponse = (passwordStrength) => {
  const response = {};
  switch (passwordStrength) {
  case 0:
    response.color = 'red';
    response.text = 'Password is very weak';
    break;
  case 1:
    response.color = 'red';
    response.text = 'Password is weak';
    break;
  case 2:
    response.color = 'red';
    response.text = 'Password is somewhat weak';
    break;
  case 3:
    response.color = 'green';
    response.text = 'Password is strong';
    break;
  case 4:
    response.color = 'green';
    response.text = 'Password is very strong';
    break;
  default:
    response.color = '';
    response.text = '';
  }
  return response;
}

export default PasswordStrength;
