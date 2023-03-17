import React from 'react';
import './index.css';

function IdCard({firstName, lastName, gender, height, birth, picture}) {
    return (
      <div className="IdCard">
        <div><img src={picture} />
        </div>
        <div>
        <ul>
            <li><strong>First name: </strong>{firstName}</li>
            <li><strong>Last name: </strong>{lastName}</li>
            <li><strong>Gender: </strong>{gender}</li>
            <li><strong>Height: </strong>{height}</li>
            <li><strong>Birth: </strong>{birth}</li>
        </ul>
        </div>
      </div>
    );
  }
  
  export default IdCard;