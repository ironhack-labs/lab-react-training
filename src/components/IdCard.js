import React from 'react'

const IdCard = (props) => {

    const {firstName, lastName, gender, height, picture} = props;

    return(
        <div className='IdCard-section'>
            <div className='IdCard-image'><img src={picture} alt='id-img' /></div>
            <div className='idCard-info'>
                <p><strong>First Name:</strong>{firstName}</p>
                <p><strong>Last name:</strong>{lastName}</p>
                <p><strong>Gender:</strong>{gender}</p>
                <p><strong>Height:</strong>{height}</p>
                <p><strong>Birth:</strong>{props.birth.toDateString()}</p>
            </div>
        </div>
    )

}

export default IdCard

