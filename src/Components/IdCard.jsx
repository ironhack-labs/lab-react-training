import React from 'react'

function IdCard(props) {
const {lastName, firstName, gender, height, birth, picture} = props;
const date = new Date(birth).toDateString();
  return (
    <div>
      <img src={picture} alt='profile picture' />
      <p> <b> First name: {firstName} </b> </p>
      <p> <b> Last name: {lastName} </b> </p>
      <p> <b> Gender: {gender} </b> </p>
      <p> <b> Height: {height} </b> </p>
      <p> <b> Birth: {date} </b> </p>
    </div>
  )
}

export default IdCard