import React from 'react'


function IdCard(props) {

  const {lastName, firstName, gender, height, birth, picture} = props;

  return (
    <div>
       <img src={picture} alt="profile" />
       <p>First Name:{firstName}</p>
       <p>Last Name: {lastName}</p>
       <p>Gender: {gender}</p>
       <p>Height: {height}</p>
       <p>Birth: {birth.toLocaleString()}</p>
    </div>
  )
}

export default IdCard