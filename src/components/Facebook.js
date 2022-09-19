import React, { useState } from 'react';
import { __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED } from 'react/cjs/react.production.min';

import profiles from '../data/berlin.json';

const Facebook = () => {
    const [profile, setProfile] = useState(profiles);

  return (
    <div>
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