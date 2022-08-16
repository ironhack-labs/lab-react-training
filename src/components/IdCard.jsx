import React from 'react';
 
function IdCard(props) {
    const {lastName, firstName, gender, height, birth, picture} = props;
  return (
    <div className="IdCard">
      <p>
        <b>LastName:</b> {lastName}
      </p>
      <p>
        <b>FirstName:</b> {firstName}
      </p>
      <p>
        <b>Gender:</b> {gender}
      </p>
      <p>
        <b>Height:</b> {height}
      </p>
      <p>
        <b>Birth:</b> {birth}
      </p>
      <p>
        <b>Picture:</b> {picture}
      </p>
      <br />
    </div>
  );
}
 
export default IdCard;