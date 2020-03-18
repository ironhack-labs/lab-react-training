// import React from "react";

// const Card = props => {
//   return (
//     <div>
//       <ul>
//         <li>First name: {props.firstName}</li>
//         <li>Last name: {props.lastName}</li>
//         <li>Gender: {props.gender}</li>
//         <li>Height: {props.height}</li>
//         <li>Date of birth:{props.birth}</li>
//         <li>{props.picture}</li>
//       </ul>
//     </div>
//   );
// };

// export default Card;

import React from 'react';

const IdCard = props => {
    return (
        <div className="card">
            <img className="card-image" src={props.picture} />
            <div className="card-info">
                <p>First Name: <span>{props.firstName}</span></p>
                <p>Last Name: <span>{props.lastName}</span></p>
                <p>Gender: <span>{props.gender}</span></p>
                <p>Height: <span>{props.height}</span></p>
                <p>Birth: <span>{props.birth.toDateString()}</span></p>
            </div>
        </div>
    )
};

export default IdCard; 
