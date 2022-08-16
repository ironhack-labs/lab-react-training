import React from 'react'

function IdCard(props) {

    const {lastName, firstName, gender, height, birth, picture} = props;

  return (
    <div className='IdCard'>

        <img className="IdCardImg"src={picture} alt="picture" />

        <div className="IdCardInfo">

        <h3>First Name: {firstName}</h3>
        <h3>Last Name: {lastName}</h3>
        <h3>Gender: {gender}</h3>
        <h3>height: {height}</h3>
        <h3>birth: {birth}</h3>

        </div>

    </div>
  )
}

export default IdCard