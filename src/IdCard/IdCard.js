import React from 'react';

export default function IdCard(props) {
  const { lastName, firstName, gender, height, birth, picture } = props;
  return (
    <div>
      <img src={picture} />
      <h4>First Name: </h4>
      <p>{firstName}</p>
      <br />
      <h4>Last Name: </h4>
      <p>{lastName}</p>
      <br />
      <h4>Gender: </h4>
      <p>{gender}</p>
      <br />
      <h4>Height: </h4>
      <p>{height / 100} m</p>
      <br />
      <h4>Birth: </h4>
      <p>{birth.toDateString()}</p>
      <br />
    </div>
  );
}
