import React from 'react';
import profiles from './data/berlin.json';

class FaceBook extends React.Component {
    render(){
        const list = profiles.map(profile => {
            return (
                <div className="profile">
                    <img src={profile.img} />
                    <div className="details">
                        <p>First name: {profile.firstName}</p>
                        <p>Last name: {profile.lastName}</p>
                        <p>Country: {profile.country}</p>
                        <p>Type: {profile.isStudent ? 'Student' : 'Teacher' }</p>
                    </div>
                </div>

            )
        })
        return (
            <div className="profiles">
             {list}
            </div>
        )
    }
}

export default FaceBook;