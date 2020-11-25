import React, {useState} from 'react'
import profiles from './data/berlin.json'
import styled from 'styled-components'

const FaceBook = () => {
    const [profile, setProfile] = useState(profiles)

    const ProfCard = styled.div`
        display: flex;
        align-items: center;
        border: 1px solid black;
        width: 500px;
        justify-content: space-evenly;
        margin: 10px 0;
    `

    const colorProfile = () => {
        setProfile([...profiles])
    }

    const countries = profile.map(p => p.country)
    const filteredCountries = countries.filter((item, pos) => countries.indexOf(item) == pos)

    return (
        <div>
            {filteredCountries.map(c => (
                <button onClick={colorProfile} key={c}>{c}</button>
            ))}
            {profile.map(p => (
                <ProfCard key={p.img}>
                    <img src={p.img} height='60' width='50' alt="" />
                    <div>
                        <p>First Name: {p.firstName}</p>
                        <p>Last Name: {p.lastName}</p>
                        <p>Country: {p.country}</p>
                        <p>Type: {p.isStudent ? 'Student' : 'Teacher'}</p>
                    </div>
                </ProfCard>
            ))}
        </div>
    )
}

export default FaceBook
