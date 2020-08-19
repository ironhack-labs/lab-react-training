import React from 'react';
import profiles from '../data/berlin.json';



export default function FaceBook() {
    return (
        <div>

            <div className="facebook">
                {profiles.map((profile, i) => {
                    return <div className="id-card">
                        <img src={profile.img} alt=""/>
                        <div class="id-card-info">
                        <p><span>First Name:</span> {profile.firstName}</p>
                        <p><span>Last Name:</span> {profile.lastName}</p>
                        <p><span>Country:</span> {profile.country}</p>
                        {profile.isStudent && <p><span>Type:</span>Student</p>}
                        {!profile.isStudent && <p><span>Type:</span>Teacher</p>}
                        </div>
                    </div>
                    })
                }
            </div>
        </div>
    )
}
