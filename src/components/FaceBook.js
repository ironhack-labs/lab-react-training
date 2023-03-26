// import React, { useState, useEffect } from 'react';
import profiles from '../data/berlin.json';

function FaceBook() {
const profileList = profiles

    return (
        <div>
        <h1>List of profiles</h1>
            <div className='profileList'>
            {profileList.map((profile) => (
                <div className='profile'>
                    <img src={profile.img} alt='profilePhoto' className='profilePhoto'/>
                    <div className='dataFB'>
                    <p>First name: {profile.firstName}</p>
                    <p>Last name: {profile.lastName}</p>
                    <p>Country: {profile.country} </p>
                    <p>Student: {(profile.isStudent).toString()}</p>
                    </div>
                </div>
            ))}
            </div>
        </div>
    )
}

export default FaceBook