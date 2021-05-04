import profiles from './data/berlin.json';
import React from 'react';


class Facebook extends React.Component {

    state = {
        profiles: profiles
    }


    render() {
        const facebook = this.state.profiles.map((profile, index) => (
            <div className='profile' key={index}>
                <img src={profile.img} alt={profile.firstName} />
                <div>
                    <p><b>First name:</b> {profile.firstName}</p>
                    <p><b>Last name:</b> {profile.lastName}</p>
                    <p><b>Country:</b> {profile.country}</p>
                    {profile.isStudent ? <p><b>Type:</b> Student</p> : <p><b>Type:</b> Teacher</p>}
                </div>
            </div>
        ))

        return (
            <div>
                {facebook}
            </div>
        )
    }
}

export default Facebook;