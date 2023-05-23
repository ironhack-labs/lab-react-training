import React from 'react';
import profiles from '../../data/berlin.json';

const FaceBook = () => {
    return (
        <div>
            <h1>Facebook Profiles</h1>
            <ul>
                {profiles.map((profile) => (
                    <li key={profile.id}>
                        <img src={profile.img} alt={profile.firstName} />
                        <div>
                            <h3>{profile.firstName}{profile.lastName}</h3>
                            <p>{profile.country}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FaceBook;

