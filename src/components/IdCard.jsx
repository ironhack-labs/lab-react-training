import React from 'react';

function IdCard(props) {
        const { firstName, lastName, gender, height, birth, picture } = props;
        return (
          <div>
            <p>First Name: {firstName}</p>
            <p>Last Name: {lastName}</p>
            <p>Gender: {gender}</p>
         <p>Height:{height}</p>
         <p>Birth: {birth.toLocaleString()}</p> 
            <img src={picture} alt={picture} />
          </div>
        )
      };
  
  export default IdCard;
