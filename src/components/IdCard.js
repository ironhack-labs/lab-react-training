import React from 'react';
import '../assets/styles/IdCardStyle.css'

function IdCard(props) {
  console.log(props.birth)
  return (
    <div className="id-card">
      <img src={props.picture} alt={`${props.firstName}`} />
      <div className="details">
        <p><span className='bold'>First name:</span> {props.firstName}</p>
        <p><span className='bold'>Last name:</span> {props.lastName}</p>
        <p><span className='bold'>Gender:</span> {props.gender}</p>
        <p><span className='bold'>Height:</span> {`${props.height/100} m `}</p>
        <p><span className='bold'>Birth:</span> {`${props.birth.getDate()}/${props.birth.getMonth()}/${props.birth.getYear()}`}</p> 
      </div>
    </div>
  );
}

export default IdCard;
