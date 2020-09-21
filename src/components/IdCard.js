import React from 'react';
import './IdCard.css';

const IdCard = props => {

  // heigt in correct format
  const height = `${props.height / 100}m`;

  // birth in correct format
  const birth = props.birth;
  const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
  const birthday = birth.toLocaleDateString('EN', options).replace(/,/g, "");
  
  return (
    <article className='card'>
      <div className='card__img'>
        <img src={props.picture} alt='user'/>
      </div>
      <div className='card__info'>
        <div className='card_info-line'>
          <h4 className='card__info-strong'>First Name:</h4>{props.firstName}
        </div>
        <div className='card_info-line'>
          <h4 className='card__info-strong'>Last Name:</h4>{props.lastName}
        </div>
        <div className='card_info-line'>
          <h4 className='card__info-strong'>Gender:</h4>{props.gender}
        </div>
        <div className='card_info-line'>
          <h4 className='card__info-strong'>Height:</h4>{height}
        </div>
  
        <div className='card_info-line'>
          <h4 className='card__info-strong'>Birth:</h4>{birthday}
        </div>
        
      </div>
    </article>
  )
}

export default IdCard;