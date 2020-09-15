import profiles from '../data/berlin.json';
import React from 'react'
import styled from "styled-components"

const StyledProfile = styled.div`
    border: 2px solid black;
    margin: 10px 0;
    display: flex;
    background-color: ${}
    img{
        width: 160px;
        object-fit: cover;
    }
`

const countries = [
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

const FaceBook = () => {

    const changeColors = (country) => () => {

    }

    return (
        <div>
            {countries.map(country => {
                return (
                    <button onClick={changeColors({ country })}>{country}</button>
                )
            })}
            {profiles.map(profile => {
                return (
                    <StyledProfile country={profile.country}>
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
