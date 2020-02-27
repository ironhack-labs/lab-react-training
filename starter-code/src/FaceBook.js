import React, { Component } from 'react';
import profiles from './data/berlin.json'

class FaceBook extends Component {
    render() {
        return(
            profiles.map(profile =>{
                return(
                    <div className="facebook-card">

                        <img alt="" src={profile.img} />
                        <div className="facebook-card-info">
                            <p>First Name: <span>{profile.firstName}</span></p>
                            <p>Last Name: <span>{profile.lastName}</span></p>
                            <p>Country: <span>{profile.country}</span></p>
                            <p>Type: <span>{profile.isStudent ? 'Student' : 'Teacher'}</span></p>
                        </div>
            
                    </div>
                )
            })
        )
    }
};

export default FaceBook;
