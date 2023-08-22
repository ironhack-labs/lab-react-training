import React from 'react'; // Import React
import profiles from '../../data/berlin.json';
import './FaceBook.css';

const FaceBook = () => {
    return (
        <div>
            {profiles.map((profile, index) => (
                <>
                    <p>Name: {profile.firstName}</p>
                    <p>Lastname: {profile.lastName}</p>
                    <p>Country: {profile.country}</p>
                    <p>Student: {profile.isStudent ? <p>true</p> : <p>false</p>}</p>
                    <img src={profile.img} />
                </>

            ))}
        </div>
    )
};

export default FaceBook;
