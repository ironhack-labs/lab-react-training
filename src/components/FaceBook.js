//jshint esversion:8
import profilesData from '../data/berlin.json';
import { useState } from 'react';

export const FaceBook = () => {

    const [profiles, setProfiles] = useState(profilesData);

    return(
        <div className='FaceBook containers'>
            {profiles.map((person, index) => {
                return(

                    <div className='Id-card'>
                        <img src={person.img} alt="Profile card" />
                        <div>
                            <span><b>First Name:</b> {person.firstName}</span> <br />
                            <span><b>Last Name:</b> {person.lastName}</span> <br />
                            <span><b>Country:</b> {person.country}</span> <br />
                            <span><b>Type:</b> {person.type}</span>
                        </div>
                    </div>

                );
            })}

        </div>

    );
}