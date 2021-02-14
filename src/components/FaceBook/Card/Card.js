import React, { useState } from 'react';

const Card = ({
  data: { firstName, lastName, country, img, isStudent },
  countrySelected,
}) => {
  const [infoDisplay, setDisplay] = useState('none');
  const handleClick = () => {
    setDisplay('block');
  };
  return (
    <article
      className={`idCard ${country === countrySelected ? 'active' : ''}`}
    >
      <div>
        <img src={img} alt="profile" onClick={() => handleClick()} />
      </div>
      <div style={{ display: infoDisplay }}>
        <p>
          <span>First Name:</span> {firstName}{' '}
        </p>
        <p>
          <span>Last Name:</span> {lastName}
        </p>
        <p>
          <span>Country:</span> {country}
        </p>
        <p>
          <span>Type:</span> {isStudent ? 'Student' : 'Teacher'}
        </p>
      </div>
    </article>
  );
};

export default Card;
