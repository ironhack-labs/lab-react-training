

import React from 'react'

function IdCard(props) {
  return (
    <div className="profile">
      <div>
        <img src={props.picture} alt="profilePicture" />
      </div>
      <div className="cardInfo">
      <p><span className="bold">First Name: </span>{props.firstName}</p>
      <p><span className="bold">Last Name: </span>{props.lastName}</p>
      <p><span className="bold">Gender: </span>{props.gender}</p>
      <p><span className="bold">Height: </span>{props.height}</p>
      <p><span className="bold">Birth:</span>{props.birth.toLocaleString()}</p>
    </div>
    </div>
  );
}

export default IdCard