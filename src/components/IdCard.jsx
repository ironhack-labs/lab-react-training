import React from 'react'

function IdCard(props) {
    const {lastName, firstName, gender, height, birth, img} = props;
  return (
    <div className='App.logo'>
        <p>LastName:{props.lastName}</p>
        <p>FirstName:{props.firstName}</p>
        <p>Gender:{props.gender}</p>
        <p>Height:{props.height}</p>
        <p>Birth:{props.birth}</p>
        <img src={img} alt=''/>
    </div>
  )
}

export default IdCard