import React from 'react'

function IdCard(data) {
    return (

        <div className='Idcard'>
            <div>
                <img src={data.picture} height={150} alt="" />
            </div>
            <div className="Idcard-text">
                <p><b>First name:</b> {data.firstName}</p>
                <p><b>Last name:</b> {data.lastName}</p>
                <p><b>Gender:</b> {data.gender}</p>
                <p><b>Height:</b> {data.height}</p>
                <p><b>Birth:</b> {data.birth}</p>
            </div>
        </div>
    )
}


export default IdCard;
