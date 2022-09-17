import React from 'react';
import './Idcard.css';

const IdCard = ({ idCard }) => {
  return (
    <div className="Idcard box">
      <img
        src={idCard.user.picture}
        alt="profile-Img"
        className="profile-img"
        style={{ margin: 5 }}
      />
      <div>
        <strong>First name:{idCard.user.firstname}</strong>
        <strong>Last name:{idCard.user.lastname}</strong>
        <strong>Gender:{idCard.user.gender}</strong>
        <strong>Height:{idCard.user.height}</strong>
        <strong>Birth:{idCard.user.birth}</strong>
      </div>
    </div>
  );
};

export default IdCard;
