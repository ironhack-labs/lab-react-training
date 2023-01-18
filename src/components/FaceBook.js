import React from 'react';
import profiles from '../data/berlin.json';
import './FaceBook.css';

function FaceBook(){

    return(
        <div className="people">
        {profiles.map(profile =>{
            return <div className="faceBookCard">
                      <img className='profilePic' src={profile.img} alt="profileImg"/>
                      <div className='personalInfo'>
                      <p> <strong>First name:</strong> {profile.firstName}</p>
                      <p><strong>Last name:</strong> {profile.lastName}</p>
                      <p><strong>Country:</strong> {profile.country}</p>
                      <p><strong>Type: </strong>{profile.isStudent ? "Student" : "Teacher"}</p>
                      </div>
                   </div>   
        })
        }
        </div>
    )
}

export default FaceBook;