import React from 'react'



function IdCard(props) {

const {lastName, firstName, gender, height, birth, picture} = props;
  return (
    <div className='idCard'>

        <div>
            <img src={picture} alt="" className='cardImage' />
        </div>

        <div className='cardBody'>
            <p> <b>First name :</b> {firstName}</p>
            <p> <b>Last name :</b>{lastName}</p>
            <p> <b>Gender :</b> {gender}</p>
            <p> <b>Height :</b>{height}</p>
            <p> <b>Birth :</b>{birth}</p>
        </div>

    </div>
  )
}

export default IdCard