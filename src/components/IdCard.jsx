import React from 'react'

function IdCard(props) {

    const {lastName, firstName, gender, height, birth, picture} = props;


  return (
    <div className='IdCard'>
        <img src={props.picture} alt={firstName + " " + lastName} />
            <p>First name: {props.firstName}</p>

            <p>Last name: {props.lastName}</p>
            <p>Gender: {props.gender}</p>
            <p>Height: {props.height}</p>
            <p>Birth: {props.birth}</p>
            
    
        
    </div>
  )
}

export default IdCard