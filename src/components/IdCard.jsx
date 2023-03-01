import React from 'react';

function IdCard(props) {
  const { lastName, firstName, gender, height, birth, picture } = props;
  return (
    <div>
      <p>{lastName}</p>
      <p>{firstName}</p>
      <p>{gender}</p>
      <p>{height}</p>
      {/* <Date>{birth}</Date> */}
      <img src={picture} alt="" />
    </div>
  );
}

export default IdCard;
