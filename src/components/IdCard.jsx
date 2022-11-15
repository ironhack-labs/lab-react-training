import React from 'react'

function IdCard(props) {
    const {lastName, firstName, gender, height, birth, picture } = props;
    const d = birth; 
    let strBirth = d.toLocaleString('en-GB', { timeZone: 'UTC' });
  return (
    <div >
      <div className='IdCard'>
        <img src={picture} alt="picture" />
        <div>
        <p><b>First name: </b>{firstName}</p>
        <p><b>Last name: </b>{lastName}</p>
        <p><b>Gender: </b>{gender}</p>
        <p><b>Height: </b>{height}</p>
        <p><b>Birth:</b>{strBirth}</p>
        </div>

      </div>
    </div>
  )
}

export default IdCard