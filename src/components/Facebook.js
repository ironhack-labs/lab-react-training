import React from 'react';
import profiles from '../data/berlin.json';

function FaceBook() {
    return (
        <div>
            {profiles.map((profile, index) => (
                <div key={index} style={{
                    display: "flex",
                    border: "1px solid black",
                    margin: "10px",
                    padding: "10px"
                }}>
                    <img src={profile.img} 
                        alt={`${profile.firstName} ${profile.lastName}`} 
                        style={{
                            marginRight: "10px", 
                            width: "150px",
                        }}/>
                    <div>
                        <p><strong>First Name :</strong>  {profile.firstName}</p>
                        <p><strong>Last name : </strong>{profile.lastName}</p>
                        <p><strong>Country :</strong> {profile.country}</p>
                        <p><strong>Type :</strong> {profile.isStudent ? 'Student' : 'Teacher'}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default FaceBook;

