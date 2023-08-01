import React from "react";
import profiles from '../data/berlin.json';

const Facebook = () => {
    
    return (
        <div>
            {profiles.map((profile) => (
            <div key={profile.id}>
                <img src={profile.img} alt={profile.firstName + profile.lastName} />
                <div>
                    <strong>FirstName: </strong> {profile.firstName}
                    <strong>Last Name: </strong> {profile.lastName}
                    <strong>Country: </strong> {profile.country}
                    <strong>Type: </strong> {profile.isStudent ? "Studen" : "Teacher"}
                </div>
            </div>
            ))};
        </div>
    );
};

export default Facebook;