import React from 'react'

function IdCard(props) {
    
  return (
    <div>
        <ul>
            <img src={props.picture} alt="" />
            <li>First name:{props.lastName}</li>
            <li>Last name:{props.firstName}</li>
            <li>Gender:{props.gender}</li>
            <li>Height:{props.height}</li>
            <li>Birth:{props.birth.toString().slice(3,10)}</li>

        </ul>
    </div>
  )
}

export default IdCard