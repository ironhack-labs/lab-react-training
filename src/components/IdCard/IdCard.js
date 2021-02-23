import React from 'react'
import './IdCard.css'

function formatDate(date) {
    return date.toLocaleDateString();
  }
export default function IdCard(props) {
    return (
        <div>
        { props.data.map((user, index) => (
            <React.Fragment key={index}>
            <div className='card'>
                <div className='picture'>
                    <img src={user.picture} alt={user.firstName}/>
                </div>
                <div className='info'>
                    <p><span>First name:</span> {user.firstName}</p>
                    <p><span>Last name:</span> {user.lastName}</p>
                    <p><span>Gender:</span> {user.gender}</p>
                    <p><span>Height:</span> {user.height}</p>
                    <p><span>Birth:</span> {formatDate(user.birth)}</p>
                </div>
            </div>
            </React.Fragment>
        ))}
        </div>
    )
}