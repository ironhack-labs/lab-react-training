import React, { useState } from "react";
import "./Facebook.css";
import infos from "./../../data/berlin.json";

const Facebook = () => {
    // Create random key
    const randomId = () => {
        const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        let result = "";

        for ( let i = 0; i < 9; i++ ) {
            result += characters.charAt(Math.floor(Math.random() * characters.length));
        };

        return result;
    };

    const addPropertiesToInfos = [...infos].map(info => {
        info.id = randomId();
        return info;
    });
    //console.log(addPropertiesToInfos[0]);
    const [profiles, setProfile] = useState(addPropertiesToInfos);

    //let arraySelected

    const handleSelectAll = () => {
        const newProfiles = [...profiles].map((profile) => {
            profile.selected = !profile.selected;
            return profile;
        });
        console.log(newProfiles[0]);
        setProfile(newProfiles);
    };

    return (
        <div id="facebook-profiles">
            <button onClick={handleSelectAll}>All</button>
            <button>...</button>
            {profiles.map((profile, i) => (
                <div key={profile.id} className={`facebook-profile${profile.selected ? " selected" : ""}`}>
                    <img src={profile.img} alt="profile"/>
                    <div>
                        <strong>First name</strong>: {profile.firstName}<br />
                        <strong>Last name</strong>: {profile.lastName}<br />
                        <strong>Country</strong>: {profile.country}<br />
                        <strong>Type</strong>: {profile.isStudent ? "Student" : "Teacher"}<br />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Facebook;