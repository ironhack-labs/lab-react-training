import { useState } from 'react';
import profiles from '../data/berlin.json';

const Facebook = () => {

    const [people, setPeople] = useState(profiles)
    const [country, setCountry] = useState("")
    const [selected, setSelected] = useState(false)

    const handleClick = (item) => {
        setCountry(item)
        setSelected(!selected)
    }
    
    return (
    <div>
        <button>All</button>
        <button onClick={() => handleClick("England")}>England</button>
        {selected ? <button  onClick={() => handleClick("Malaysia")}>Malaysia</button> : <button onClick={() => handleClick("Malaysia")}>Malaysia</button>}
        {selected ? <button style={{color: "blue"}} onClick={() => handleClick("Malaysia")}>Malaysia</button> : <button onClick={() => handleClick("Malaysia")}>Malaysia</button>}
        <button onClick={() => handleClick("Germany")}>Germany</button>
        <button onClick={() => handleClick("USA")}>USA</button>
        <button onClick={() => handleClick("Sweden")}>Sweden</button>
        <button onClick={() => handleClick("England")}>Nigeria</button>
        <button onClick={() => handleClick("England")}>Italy</button>
        <button onClick={() => handleClick("England")}> Scotland</button>
        <button onClick={() => handleClick("England")}>Kazakhstan</button>
        <button onClick={() => handleClick("England")}>Russia</button>
        <button onClick={() => handleClick("England")}>Catalonia</button>
        <button onClick={() => handleClick("England")}>France</button>
        <button onClick={() => handleClick("England")}>Israel</button>
        <button onClick={() => handleClick("England")}>Brazil</button>
        <button onClick={() => handleClick("England")}>Taiwan</button>
        <button onClick={() => handleClick("England")}>Turkey</button>
        <button onClick={() => handleClick("England")}>Norway</button>
    

            <table>
           {people.map(profile => {
           return  <tr style={{ backgroundColor: profile.country === country ? 'blue' : 'white'}}>
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