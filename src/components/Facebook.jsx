import "../styles/Facebook.css"
import profiles from '../data/berlin.json';
import { useState } from "react";

function Facebook(props) {
    const [selectedCountry, setSelectedCountry] = useState('')

    let myCountries = []
    profiles.forEach(profile => {
        if(!myCountries.includes(profile.country)) {
            myCountries.push(profile.country)
        }
    })
    
    function changeCountryBgnColor(country) {
        if(country === selectedCountry) {
            return 'lightblue'
        }
    }

    return (
        <div>
            {myCountries.map(country => {
                return (
                    <button key={country} onClick={(e) => {setSelectedCountry(e.target.innerHTML)}} style={{backgroundColor: changeCountryBgnColor(country)}}
                    className="country">{country}</button>
                )
            })}
            {profiles.map(profile => {
                return (
                    <div key={profile.lastName} className="Facebook" style={{backgroundColor: changeCountryBgnColor(profile.country)}}>
                        <img src={profile.img} alt='Profile picture'/>
                        <div>
                            <p><span>First name: </span>{profile.firstName}</p>
                            <p><span>Last name: </span>{profile.lastName}</p>
                            <p><span>Country: </span>{profile.country}</p>
                            <p><span>Type: </span>{profile.isStudent ? 'Student' : "Teacher"}</p>
                        </div>
                    </div>
                )}
            )}
        </div>     
    )
}

export default Facebook