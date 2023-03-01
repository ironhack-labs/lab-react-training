import React from 'react';

function capitalize(str) {
  return str[0].toUpperCase() + str.slice(1);
}

function IdCard(props) {
  const { lastName, firstName, gender, height, birth, picture } = props;
  return (
    <div className='idOrganizer'>
    <div className="idContainer">
      <img className="idCardImg" src={`${picture}`} alt="" />
      <ul className="idCardUl" style={{listStyle: "none"}}>
        <li className="idCardItem"><strong>First Name:</strong> {capitalize(firstName)}</li>
        <li className="idCardItem"> <strong>Last Name:</strong> {capitalize(lastName)}</li>
        <li className="idCardItem"><strong>Gender:</strong> {capitalize(gender)}</li>
        <li className="idCardItem"><strong>Height:</strong> {height}</li>
        <li className="idCardItem"><strong>Birth:</strong> {birth.toLocaleString()}</li>
      </ul>
    </div>
    </div>
  );
}

export default IdCard;
