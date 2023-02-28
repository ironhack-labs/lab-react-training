import React from 'react'

function IdCard(props) {
    const {lastName, firstName, gender, height, birth, picture} = props
  return (
    <div className='container'>
    <div>
    <img src={picture} alt="male" className='profilePic'/>
    </div>
    <div className='info-container'>

    <span><b>First Name:</b> {firstName}</span>
    <span><b>Last Name:</b> {lastName}</span>
    <span><b>Gender:</b> {gender}</span>
    <span><b>Height:</b> {height}m</span>
    <span><b>Birth:</b> {birth.toLocaleString()}</span>
    </div>   

    </div>
  )
}

export default IdCard