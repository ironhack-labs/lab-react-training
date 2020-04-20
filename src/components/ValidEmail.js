// components/ValidEmail.js

import React from 'react';

const ValidEmail = () => {
  const divStyle = {
    color: 'green',
  }
  return (
    <div className='valid-email' style={divStyle}>
      You typed a valid email
    </div>
  );
}

export default ValidEmail;
