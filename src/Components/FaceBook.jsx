import profiles from '../data/berlin.json';
import React, { useState } from 'react'
import styled from "styled-components"

const StyledProfile = styled.div`
    border: 2px solid black;
    margin: 10px 0;
    display: flex;
    img{
        width: 160px;
        object-fit: cover;
    };
    background-color: props => props.country === props.selected ? 'blue' : 'white'
`

const FaceBook = () => {

    const [countries] = useState([
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
    ])

    let [selectedCountry, setSelectedCountry] = useState("")
    const changeColors = (country) => () => {
        setSelectedCountry(country)
    }

    return (
        <div>
            {countries.map((country, i) => {
                return (
                    <button key={i} onClick={changeColors(country)}>{country}</button>
                )
            })}
            {profiles.map((profile, i) => {
                return (
                    <StyledProfile key={i} style={{ backgroundColor: profile.country === selectedCountry ? 'blue' : 'white' }}>
                        <img src={profile.img} alt="Profile" />
                        <div className='person-info'>
                            <p><b>First name: </b>{profile.firstName}</p>
                            <p><b>Last name: </b>{profile.lastName}</p>
                            <p><b>Country: </b>{profile.country}</p>
                            <p><b>Type: </b>{profile.isStudent ? "Student" : "Teacher"}</p>
                        </div>
                    </StyledProfile>
                )
            })}
        </div>
    )
}

export default FaceBook
