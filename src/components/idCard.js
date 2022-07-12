import React from 'react';

function IdCard(props) {
  console.log(props);
  return (
    <div
      style={{
        padding: '2rem',
        backgroundColor: '#f3f3f3',
        maxWidth: '400px',
        borderRadius: '10px',
        margin: '0 auto',
        textAlign: 'center',
      }}
    >
      <h1 className="lastName">{props.card.lastName}</h1>
      <h1 className="firstName">{props.card.firstName}</h1>
      <p className="gender">{props.card.gender}</p>
      <p className="height">{props.card.height}</p>
      <p className="birth">{props.card.birth}</p>
      <p className="profile-pic">{props.card.picture}</p>
    </div>
  );
}

export default IdCard;
