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
      <div className="right">
        <strong>First name:{idCard.user.firstname}</strong>
        <br />
        <strong>Last name:{idCard.user.lastname}</strong>
        <br />
        <strong>Gender:{idCard.user.gender}</strong>
        <br />
        <strong>Height:{idCard.user.height}</strong>
        <br />
        <strong>Birth:{idCard.user.birth}</strong>
        <br />
      </div>
    </div>
  );
};

export default IdCard;
