import React from 'react'


const IdCard = props => {
    return (
        <div className='container'>
                <div>
                    <img src={props.img} alt={props.lastName}/>
                </div>
                <div className='idcard-text'>
                <p><span><b>First Name: </b></span>{props.firstName}</p>
                <p><span><b>Last Name: </b></span>{props.lastName}</p>
                <p><span><b>Gender: </b></span>{props.gender}</p>
                <p><span><b>Height: </b></span>{props.height}m</p>
                <p><span><b>Birth: </b></span>{new Date(props.birth).toDateString()}</p>
            </div>
        </div>
    )
}

export default IdCard