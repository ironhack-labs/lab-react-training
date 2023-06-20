import { useState } from 'react';
import profiles from '../data/berlin.json';

// {"firstName": "Aaron", "lastName": "Newell", "country": "England", "img": "https://i.imgur.com/CFgX3Xx.png", "isStudent": false},
 

export default function FaceBook() {

    const [countrySelected, updateSelectedCountry ] = useState("All");
    const filterOnCountry = (country) => {
        updateSelectedCountry(country);
    };

    const countriesButtons = [
        <button key="All" onClick={()=>filterOnCountry("All")} style={{backgroundColor: (countrySelected === "All" ? '#a3d2e2' : undefined) }}>All</button>,
        ...profiles.map(p => p.country)
    .filter((value, index, array) => array.indexOf(value) === index)
    .map(c => {return (<button key={c} onClick={()=>filterOnCountry(c)}>{c}</button>) })];
    
    // console.log("cou bntriesButtons", countriesButtons);

    return (<div className='facebook' >
                <div className='country-filter'>
                {countriesButtons}
                </div>
                { profiles //.filter(p => countrySelected === "All" || p.country === countrySelected)
                    .map(p => <div id="id-card" key={p.img} style={{backgroundColor: (countrySelected === p.country ? '#a3d2e2' : undefined) }} >
                            <img src={p.img} alt={p.lastName} />
                            <div>
                                <p><span className="label" >First name: </span><span>{p.firstName}</span></p>
                                <p><span className="label" >Last name: </span><span>{p.lastName}</span></p>
                                <p><span className="label" >Country: </span><span>{p.country}</span></p>
                                <p><span className="label" >Type: </span><span>{p.isStudent ? "Student" : "Teacher"}</span></p>
                            </div>
                        </div>)
                }
            </div>);
}