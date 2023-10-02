import React from 'react'
import { useState } from 'react';

function FaceBookProfile({ profile }) {
    const [clicked, setClicked] = useState(profile.selected ? true : false);
    return (
        <div 
          className="border border-dark d-inline-flex flex-row p-1 my-2" 
          style={profile.selected ? { backgroundColor: "#6b9aff"} : { backgroundColor: "white" }} 
          onClick={() => clicked ? setClicked(false) : setClicked(true)} 
        >
            <img className="border" src={profile.img} style={{ width: "150px", height: "150px"}} />
            <div className={`text-start ms-1 ${clicked ? '' : 'visually-hidden'}`} >
                <div><strong>First name:</strong> {profile.firstName}</div>
                <div><strong>Last name:</strong> {profile.lastName}</div>
                <div><strong>Country:</strong> {profile.country}</div>
                <div><strong>Type:</strong> {profile.isStudent ? "Student" : "Teacher"}</div>
            </div>
        </div>
    )
}

export default FaceBookProfile;
