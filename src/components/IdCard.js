import React from "react";

function IdCard(props) {
  const { picture, firstName, lastName, gender, height, birth } = props.card;
  // console.log(props);
  return (
    <div>
      <img src={picture} alt={picture} />
      <p>
        <strong>First name:</strong>
        {firstName}
      </p>
      <p>
        <strong>Last name:</strong>
        {lastName}
      </p>
      <p>
        <strong>Gender:</strong>
        {gender}
      </p>
      <p>
        <strong>Height:</strong>
        {height / 100} m
      </p>
      <p>
        <strong>Birth:</strong>
        {birth.toLocaleDateString()}
      </p>
    </div>
  );
}

export default IdCard;
