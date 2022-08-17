import React from 'react';

function IdCard(props) {
  const { lastName, firstName, gender, height, birth, picture } = props;

  return (
    <div className="idCard">
      <img src={picture} alt="..." />
      <div>
        <p>
          <strong>FirstName: </strong> {firstName}
        </p>
        <p>
          <strong>FirstName: </strong> {lastName}
        </p>
        <p>
          <strong>FirstName: </strong> {gender}
        </p>
        <p>
          <strong>FirstName: </strong> {height}
        </p>
        <p>
          <strong>FirstName: </strong> {birth}
        </p>
      </div>
    </div>
  );
}

export default IdCard;
