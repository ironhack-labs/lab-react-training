import React from 'react';
import './FaceBook.css';

import profiles from '../../data/berlin.json';

function FaceBook(props) {
    const profileCountries = profiles.map(profile => profile.country);
    const uniqueCountries = [... new Set(profileCountries)].sort();

    const [selectedCountry, setSelectedCountry] = React.useState("All");
    const [displayedProfiles, setDisplayedProfiles] = React.useState(profiles);
    const [displayAllInformation, setDisplayAllInformation] = React.useState("none");
    const [sortAsc, setSortAsc] = React.useState(true);


    function searchByName(event) {
        let searchTerm = event.target.value;
        const newProfileArr = profiles.filter((profile) =>
          profile.firstName.includes(searchTerm)
        );
        setDisplayedProfiles(newProfileArr);
      }    

    function toggleAllInformtion() {
        displayAllInformation==="none"?setDisplayAllInformation(""):setDisplayAllInformation("none");
    }

    function sortByName() {
            const newProfileArr = [...profiles].sort((a, b) => {
              return sortAsc?a.lastName.localeCompare(b.lastName):b.lastName.localeCompare(a.lastName);
            });
            setSortAsc(!sortAsc);
            setDisplayedProfiles(newProfileArr);
    }

    return (
        <div>
            <button onClick={()=>setSelectedCountry("All")}>All</button>
            <br></br>
            {uniqueCountries.map((country,index)=> {
                return (
                    <button key={index} onClick={()=>setSelectedCountry(country)}>{country}</button>
                )
            })}
            <br></br>
            <button onClick={toggleAllInformtion}>Toggle profile info.</button><button onClick={sortByName}>Sort by last name {sortAsc?'↓':'↑'}</button>
            <br></br>
            <input
                name="name"
                placeholder="Search by first name"
                onChange={searchByName}
            ></input>
            <div className="profiles">
                {displayedProfiles.map((profile, index) => {
                    return (
                    <Profile key={index} profile={profile} selectedCountry={selectedCountry} displayAllInformation={displayAllInformation} profileStyle="profile-base-style"/>
                )
                })}
            </div>
        </div>)
}

function Profile(props) {
    const {profile, profileStyle, selectedCountry, displayAllInformation} = props;
    let addHighlight = "";

    const [displayInformation, setDisplayInformation] = React.useState("none");

    if(selectedCountry === profile.country){
        addHighlight="profile-highlight";
    }

    function toggleDisplay(){
        displayInformation==="none"?setDisplayInformation(""):setDisplayInformation("none");
    }

    return (
        <div className={`${profileStyle} ${addHighlight}`}>
            <img src={profile.img} alt={`Profile picture for ${profile.firstName} ${profile.lastName}`} height="100px" onClick={toggleDisplay}></img>
            <div style={{display: `${displayAllInformation&&displayInformation==="none"?"none":""}`}}>
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

