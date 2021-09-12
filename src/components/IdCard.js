import React from 'react';
import './IdCard.css';

const IdCard = ({
  firstName,
  lastName,
  gender,
  height,
  birth,
  pictureLink,
}) => {
  const date = new Date(birth);

  const showDate = (date) => {
    if (!date) {
      return 'data inválida';
    }
    let day = date.getDay();
    let month = date.getMonth();
    let year = date.getFullYear();
    day = day < 10 ? '0' + day : day;
    month = month < 10 ? '0' + month : month;
    return day + '/' + month + '/' + year;
  };

  const showHeight = (height) => {
    return height > 99
      ? height[0] + '.' + height.slice(1) + 'm'
      : height + 'cm';
  };

  return (
    <div className="container">
      <div className="img-container">
        <img src={pictureLink} alt="id card" />
      </div>
      <div className="text-container">
        <strong>First Name:</strong> {firstName}
        <br />
        <strong>Last Name:</strong> {lastName}
        <br />
        <strong>Gender:</strong> {gender}
        <br />
        <strong>Height:</strong> {showHeight(height)}
        <br />
        <strong>Birth:</strong> {showDate(date)}
      </div>
    </div>
  );
};

export default IdCard;
