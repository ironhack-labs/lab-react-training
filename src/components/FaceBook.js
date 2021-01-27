import React from 'react';
import profiles from '../data/berlin.json';
import '../Box.css';

const FaceBook = () => {
    const users = profiles.map(profile => {
        return <div className='box'> 
        <img src={profile.img} alt={profile.name}/>
        <div className='box-text'>
        <p><strong>First name:</strong> {profile.firstName}</p>
        <p><strong>Last name:</strong> {profile.lastName}</p>
        <p><strong>Country:</strong> {profile.country}</p>
        <p><strong>Type:</strong>{profile.isStudent ? ' Student' : ' Teacher'}</p>
        </div>
        </div>
    })
    
    return(
        <div>
            {users}
        </div>
    )
}

export default FaceBook;

