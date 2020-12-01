import React from 'react';

const IdCard = (props) => {
  const { lastName, firstName, gender, height, birth, picture } = props; 

  // Formatting the height variable 
  const strHeight = height.toString(); 
  const formattedHeight = `${strHeight[0]}.${strHeight[1]}${strHeight[2]}m`;

  // Formatting the date variable 
  const formattedBirth = birth.toLocaleDateString(); 

  return (
    <div className='card'>
      <div className='id-card_picture'>
        <img src={picture} alt='identification pic' />
      </div>

      <div className='id-card_main'>
        <p><b>First name:</b> {firstName}</p>
        <p><b>Last name:</b> {lastName}</p>
        <p><b>Gender:</b> {gender}</p>
        <p><b>Height:</b> {formattedHeight}</p>
        <p><b>Birth:</b> {formattedBirth}</p>
      </div>
    </div>
  )
}

export default IdCard;
