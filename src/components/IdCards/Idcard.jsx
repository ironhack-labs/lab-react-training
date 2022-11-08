import React from 'react';

function format(inputDate) {
  let date, month, year;

  date = inputDate.getDate();
  month = inputDate.getMonth() + 1;
  year = inputDate.getFullYear();

  date = date.toString().padStart(2, '0');

  month = month.toString().padStart(2, '0');

  return `${date}/${month}/${year}`;
}

export function Idcard({
  lastName,
  firstName,
  gender,
  height,
  birth,
  picture,
}) {
  return (
    <div className="card">
      <div>
        <img className="cardImg" src={picture} alt="Avatar" />
      </div>
      <div className="container">
        <h4>
          <b>
            {firstName} {lastName}
          </b>
        </h4>
        <p>
          <b>Gender:</b>
          {gender}
        </p>
        <p>
          <b>Height:</b>
          {height}
        </p>
        <p>
          <b>Birth:</b>
          {format(birth)}
        </p>
      </div>
    </div>
  );
}
