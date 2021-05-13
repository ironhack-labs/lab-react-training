import React from 'react';
import './FaceBook.css';

import profiles from '../../data/berlin.json';

function FaceBook(props) {
    const profileCountries = profiles.map(profile => profile.country);
    const uniqueCountries = [... new Set(profileCountries)].sort();

    const [selectedCountry, setSelectedCountry] = React.useState("All");

    return (
        <div>
            <button>All</button>
            <br></br>
            {uniqueCountries.map((country,index)=> {
                return (
                    <button key={index} onClick={()=>setSelectedCountry(country)}>{country}</button>
                )
            })}
            {profiles.map((profile, index) => {
                return (
                <Profile key={index} profile={profile} selectedCountry={selectedCountry} profileStyle="profile-base-style"/>
            )
            })}
        </div>)
}

function Profile(props) {
    const {profile, profileStyle, selectedCountry} = props;
    let addHighlight = "";

    if(selectedCountry === profile.country){
        addHighlight="profile-highlight";
    }

    return (
        <div className={`${profileStyle} ${addHighlight}`}>
                    <img src={profile.img} alt={`Profile picture for ${profile.firstName} ${profile.lastName}`} height="100px"></img>
                    <div>
                    <ul >
                        <li><b>First name: </b>{profile.firstName}</li>
                        <li><b>Last name: </b>{profile.lastName}</li>
                        <li><b>Country: </b>{profile.country}</li>
                        <li><b>Type: </b>{profile.isStudent?"Student":"Teacher"}</li>
                    </ul>
                    </div>
            </div>
    )
}

export default FaceBook

