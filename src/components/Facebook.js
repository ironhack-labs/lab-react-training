import { useState } from 'react';
import profiles from '../data/berlin.json';

const Facebook = () => {

    const [people, setPeople] = useState(profiles)
    const [selectedCountry, setSelectedCountry] = useState("");

    const countries = [
        "All",
        "England",
        "Malaysia",
        "Germany",
        "USA",
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
    ];

    const handleClick = (country) => {
        setSelectedCountry(country);
    }
    
    return (
    <div>
{countries.map((country) => (
                <button
                    key={country}
                    style={{ background: selectedCountry === country ? 'blue' : 'white' }}
                    onClick={() => handleClick(country)}
                >
                    {country}
                </button>
))}

            <table>
           {people.map(profile => {
           return  <tr style={{ backgroundColor: profile.country === selectedCountry ? 'blue' : 'white'}}>
                    <img src={profile.img} width="150px" />
                    <h4>First Name: <span>{profile.firstName}</span></h4>
                    <h4>Last Name: <span>{profile.lastName}</span></h4>
                    <h4>Country: <span>{profile.country}</span></h4>
                    {profile.isStudent ? <h4>Type: <span>Student</span></h4> : <h4>Type: <span>Teacher</span></h4>}
                </tr>
                })}
        </table>
    </div>
)}


export default Facebook;