import React from 'react';

const IdCard = (props) => {
  return (
    <div className="Card">
      <img src={props.picture} alt="picture" />
      <div className="data-people">
        <p>
          <b>First name:</b> {props.firstName}<br />
          <b>Last name:</b> {props.lastName}<br />
          <b>Gender:</b> {props.gender}<br />
          <b>Height:</b> {props.height}<br />
          <b>Birth:</b> {props.birth}
        </p>
      </div>
    </div>
  );
};

export default IdCard;
