import React from 'react';

function IdCard(props){
return(
        <div className='idcard'>
            <div className='image'> <img src={props.image_url} alt='people'/> </div>
        <div className='info'>
            <p>First Name: {props.firstname}</p>
            <p>Last Name: {props.lastname}</p>
            <p>Gender: {props.gender}</p>
            <p>height:{props.height}</p>
            <p>Birth Date:{props.birth}</p>
        </div>
        </div>
)
}

export default IdCard