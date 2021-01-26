import React from 'react';
import profiles from './berlin.json';
import './Facebook.css';

class Facebook extends React.Component {

    state = { profiles }

    render() {
        const newProfiles = this.state.profiles.map(profile => {
            return (
                <div key={profile.firstName} className='facebook-profile'>
                    <img src={profile.img} alt='Facebook profile' />
                    <div className='profile-text'>
                        <p><strong>First name:</strong> {profile.firstName}</p>
                        <p><strong>Last name:</strong> {profile.lastName}</p>
                        <p><strong>Country:</strong> {profile.country}</p>
                        {profile.isStudent ? <p><strong>Type:</strong> Student</p> : <p><strong>Type:</strong> Teacher</p>} 
                    </div>
                </div>

            ) 
        })

        return (
            <div>
            {newProfiles} 
            </div>
        )
    }
}


export {Facebook};