import React from 'react';
import profiles from '../data/berlin.json';
import '../Box.css';

const FaceBook = () => {
    function checkIfStudent(type) {
        return (type ? 'Student' : 'Teacher');
    }

    const users = profiles.map(profile => {
        return <div className='box'> 
        <img src={profile.img} alt={profile.name}/>
        <div className='box-text'>
        <p><strong>First name:</strong> {profile.firstName}</p>
        <p><strong>Last name:</strong> {profile.lastName}</p>
        <p><strong>Counter:</strong> {profile.counter}</p>
        <p><strong>Type:</strong>{checkIfStudent(profile.type)}</p>
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

