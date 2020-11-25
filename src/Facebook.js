import profiles from './data/berlin.json';
import React from 'react'
import {useState} from 'react'


const Facebook = () => {
    const countries=[
        "England",
        "USA",
        "Malaysia",
        "Germany",
        "Sweden",
        "Nigeria",
        "Italy",
        "Scotland",
        "Kazakhstan",
        "Russia",
        "Catalonia",
        "France",
        "Israel",
        "Brazil",
        "Taiwan",
        "Turkey",
        "Norway"
    ]

    return (
        <div>
        {countries.map(el =>{
            return <button onClick={{el}} >{el}</button>
        })}
            {profiles.map(profile => {
                return (
                   <div> 
                        <img src={profile.img}/>
                    <div> 
                            <p><b>First name: </b>{profile.firstName}</p>
                            <p><b>Last name: </b>{profile.lastName}</p>
                            <p><b>Country: </b>{profile.country}</p>
                            <p><b>Type: </b>{profile.isStudent ? "Student" : "Teacher"}</p>
                    </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Facebook