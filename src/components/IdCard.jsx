import React from 'react'

function IdCard(props) {

    const {lastName, firstName, gender, height, birth, picture} = props
    console.log(props)
    return (
        /* INT1 */
 
    <div className='id-card'>
    <p>Last Name: {lastName}</p>
    <p>First Name: {firstName}</p>
    <p>Gender: {gender}</p>
    <p>Height: {height}</p>
    <p>Birth: {birth}</p>
    <img src={picture} alt="idphoto"/>

</div>
  )
}

export default IdCard