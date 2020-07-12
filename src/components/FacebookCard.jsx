import React from 'react'

function FacebookCard(props) {
    return (
        <div className='profile' style={{backgroundColor: props.profile.isSelected ? 'lightBlue' : 'white'}}>
            <div className='image-profile' >
                <img src={props.profile.img} alt="card person"/>
            </div>
            <div className='data-profile'>
                <p><strong>First name: </strong>{props.profile.firstName}</p>
                <p><strong>Last name: </strong>{props.profile.lastName}</p>
                <p><strong>Country: </strong>{props.profile.country}</p>
                <p><strong>Type: </strong>{props.profile.isStudent === true ? 'Student' : 'Teacher'}</p>
            </div>
        </div>
    )
}

export default FacebookCard

