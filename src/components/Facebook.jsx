import React from 'react'
import './Facebook.css';


function Facebook(props) {
    let state = "all"

    const allCountries = props.profiles.map(prof => prof.country)
    const countries = [... new Set(allCountries)]
    const buttons = countries.map(country => {
        <li key={country} onClick={`() => state = ${country}`}><button>{country}</button></li>
    })
    const profiles = props.profiles.map(profile => {
        return (
            <li className="profiles">
                <img src={profile.img} alt="avatar"></img>
                <div className="infoDiv">
                    <p><b>First Name:</b>{profile.firstName}</p>
                    <p><b>Last Name: </b>{profile.lastName}</p>
                    <p><b>Country: </b>{profile.country}</p>
                    <p><b>Role: </b>{profile.isStudent ? "Student" : "Teacher"}</p>
                </div>
            </li>
        )
    })

    return (
        <div>
            <ul className="buttonsFilter">
                {buttons}
            </ul>
            <ul>
                {profiles}
            </ul>
        </div>
    );
}

export default Facebook;