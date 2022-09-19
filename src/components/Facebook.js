import React, { useState } from 'react';

import profiles from '../data/berlin.json';

const Facebook = () => {
    const [profile, setProfile] = useState(profiles);


  return (
    <div >
        <div className='buttons-country'>
            <button>All</button>
            <button>England</button>
            <button>USA</button>
            <button>Malaysia</button>
            <button>Germany</button>
            <button>Sweden</button>
            <button>Nigeria</button>
            <button>Italy</button>
            <button>Scotland</button>
            <button>Kazakhstan</button>
            <button>Russia</button>
            <button>Catalonia</button>
            <button>France</button>
            <button>Israel</button>
            <button>Brazil</button>
            <button>Taiwan</button>
            <button>Turkey</button>
            <button>Norway</button>
        </div>

        {profile.map((oneProfile, index) => {
            console.log(profile)
            return (
                <div key={index} style={{border: '1px solid black', width: 400, margin: 20, display: 'flex'}}>
                    <div>
                        <img src={oneProfile.img} alt={oneProfile.firstName} style={{height: 150, margin: 5}}/>
                    </div>
                    <div style={{marginLeft: 10}}>
                        <p><strong>FirstName</strong>: {oneProfile.firstName}</p>
                        <p><strong>LastName:</strong> {oneProfile.lastName}</p>
                        <p><strong>Country:</strong> {oneProfile.country}</p>
                        <p><strong>Type:</strong> {oneProfile.isStudent ? 'Student' : 'Teacher'}</p>
                    </div>
                </div>
            )
        })}
    </div>
  )
}

export default Facebook;