import React from 'react';

const IdCard = props => {
  return (
    <div className="id-card">
        <img src={props.picture} alt="avatar"/>
        <div>
            <p><strong>First name: </strong>{props.firstName}</p>
            <p><strong>Last name: </strong>{props.lastName}</p>
            <p><strong>Gender: </strong>{props.gender}</p>
            <p><strong>Height: </strong>{props.height}</p>
            <p><strong>Birth: </strong>{props.birth}</p>
        </div>
    </div>
  );
}

export default IdCard;