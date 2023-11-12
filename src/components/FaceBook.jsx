import { useState } from "react"
import profilesArray from "../data/berlin.json"

function FaceBook(props) {
    const [profiles, setProfiles] = useState(profilesArray)
    const [countryClicked, setCountryClicked] = useState({ country: '', clicked: false })


    const countries = [];
    profilesArray.forEach(profile => {
        if (!countries.includes(profile.country)) countries.push(profile.country)
    });

    const profileCardStyle = {
        border: '1px solid black',
        padding: '10px',
        margin: '20px',
        display: 'flex',
        backgroundColor: 'white',
    }

    const filteredCardStyle = { ...profileCardStyle, backgroundColor: 'blue' }

    const imgStyle = {
        height: '200px',
    }

    const infoStyle = {
        paddingLeft: '30px',
        textAlign: 'left',
    }

    const pStyle = {
        fontSize: 'x-large',
    }

    const countryButtonStyle = {
        padding: '10px',
        margin: '10px',
    }

    const clikedCountryButtonStyle = { ...countryButtonStyle, border: '2px solid blue' }

    function countryButtonClicked(event) {
        let clickedCountry = event.target.innerHTML;
        let tempClicked = !countryClicked.clicked;
        setCountryClicked({ country: clickedCountry, clicked: tempClicked })
    }

    return (
        <div>
            <div>
                {countries.map(country => {
                    return (
                        <button onClick={countryButtonClicked} style={
                            countryClicked.country == country && countryClicked.clicked == true ? clikedCountryButtonStyle : countryButtonStyle

                        } key={country}>{country}</button>
                    )
                })}
            </div>

            {profiles.map(profile => {
                return (

                    <div style={countryClicked.country == profile.country && countryClicked.clicked == true ? filteredCardStyle : profileCardStyle} key={profile.img}>
                        <div>
                            <img style={imgStyle} src={profile.img} alt="Profile Picture" />
                        </div>

                        <div style={infoStyle}>
                            <p style={pStyle}><strong>First name: </strong>{profile.firstName}</p>
                            <p style={pStyle}><strong>Last name: </strong>{profile.lastName}</p>
                            <p style={pStyle}><strong>Country: </strong>{profile.country}</p>
                            <p style={pStyle}><strong>Type: </strong>{profile.isStudent ? 'Student' : 'Teacher'}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default FaceBook